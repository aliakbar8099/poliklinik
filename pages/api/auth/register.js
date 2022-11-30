/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
const jwt = require("jsonwebtoken");

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");
        let bodyObject = req.body
        let { fullname, NationalCode, phoneNumber, password, password2 } = bodyObject
        let user = await db.collection("users");

        let defaultData = {
            birthDay: null,
            email: null,
            city: null,
            adderess: null,
            timeCreateAccount: new Date().toISOString()
        }

        switch (req.method) {
            case "POST":
                const salt = await bcrypt.genSalt(10);

                if (!fullname || !NationalCode || !phoneNumber || !password || !password2) {
                    res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }
                if (!(/^(\+98|0)?9\d{9}$/.test(phoneNumber[0] == 0 ? phoneNumber.substring(1,) : phoneNumber))) {
                    return res.status(400).send({ msg: "شماره موبایل را درست وارد کنید" })
                }

                if (password.length < 6) {
                    return res.status(400).send({ msg: "رمز عبور باید حداقل 6 رقم باشد" })
                }

                if (password != password2) {
                    return res.status(400).send({ msg: "رمز عبور برابر نیست" })
                }

                if (await user.findOne({ NationalCode })) {
                    return res.status(402).send({ msg: "کد ملی در سیستم ثبت شده است!" })
                }
                if (await user.findOne({ phoneNumber })) {
                    return res.status(402).send({ msg: "شماره موبایل در سیستم ثبت شده است!" })
                }

                password = await bcrypt.hash(password, salt);

                user.insertOne({
                    fullname, NationalCode, phoneNumber, password,
                    ...defaultData,
                });

                const payload = {
                    user: {
                        NationalCode
                    }
                };

                jwt.sign(
                    payload,
                    "randomString",
                    {
                        expiresIn: 3600 * 6
                    },
                    (err, token) => {
                        if (err) throw err;
                        res.status(200).json({
                            token
                        });
                    }
                );
                break;

        }

        // const movies = await db
        //     .collection("users")
        //     .find({})
        //     .sort({ metacritic: -1 })
        //     .limit(10)
        //     .toArray();


    } catch (e) {
        console.error(e);
    }
};