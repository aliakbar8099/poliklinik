/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";
const jwt = require("jsonwebtoken");

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let {
            fullname,
            lengthJop,
            img,
            NationalCode,
            phoneNumber,
            codeJop,
            category,
            positionsJop,
            bio,
        } = req.body;


        let user = await db.collection("users");


        switch (req.method) {
            case "POST":
                let uniqCode = isLogin(req, res);
                let findUser = await user.findOne({ NationalCode: uniqCode });


                if (findUser.rol != "admin") {
                    return res.status(403).send({ msg: "شما دسترسی ندارید", rol: findUser.rol })
                }

                const salt = await bcrypt.genSalt(10);
                let password = await bcrypt.hash(phoneNumber, salt);

                let defaultData = {
                    password,
                    birthDay: null,
                    email: null,
                    city: null,
                    adderess: null,
                    rol: "doctor",
                    timeCreateAccount: new Date().toISOString()
                }

                if (!fullname ||
                    !lengthJop ||
                    !img ||
                    !NationalCode ||
                    !phoneNumber ||
                    !codeJop ||
                    !category ||
                    !positionsJop ||
                    !bio) {
                    res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }
                if (!(/^(\+98|0)?9\d{9}$/.test(phoneNumber[0] == 0 ? phoneNumber.substring(1,) : phoneNumber))) {
                    return res.status(400).send({ msg: "شماره موبایل را درست وارد کنید" })
                }

                if (await user.findOne({ NationalCode })) {
                    return res.status(402).send({ msg: "کد ملی در سیستم ثبت شده است!" })
                }
                if (await user.findOne({ phoneNumber })) {
                    return res.status(402).send({ msg: "شماره موبایل در سیستم ثبت شده است!" })
                }


                user.insertOne({
                    fullname,
                    lengthJop,
                    img,
                    NationalCode,
                    phoneNumber,
                    codeJop,
                    category,
                    positionsJop,
                    bio,
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
                            msg: "پزشک مورد نظر با موفقیت اضافه شد"
                        });
                    }
                );
                break;

            case "GET":

                let newData = []

                const lists = await db
                    .collection("users")
                    .find({})
                    .sort({ metacritic: -1 })
                    .toArray();

                let finDoctor = await lists.filter(i => i.rol === "doctor")

                for (let i = 0; i < finDoctor.length; i++) {
                    let {
                        _id,
                        fullname,
                        lengthJop,
                        img,
                        codeJop,
                        category,
                        positionsJop,
                    } = finDoctor[i];

                    newData.push({
                        _id,
                        fullname,
                        lengthJop,
                        img,
                        codeJop,
                        category,
                        positionsJop,
                        rank: 60
                    })
                }


                if (!req.query["id"]) {
                    res.status(200).send({
                        data: newData,

                    })
                }
                else {
                    let single = finDoctor.filter(item => item["_id"] == req.query["id"])
                    if (!single[0]) {
                        return res.status(404).send({ msg: "وجود ندارد" })
                    }
                    let {
                        _id,
                        fullname,
                        lengthJop,
                        img,
                        codeJop,
                        category,
                        positionsJop,
                        rank,
                        bio
                    } = single[0]
                    res.status(200).send({
                        data: {
                            _id,
                            fullname,
                            lengthJop,
                            img,
                            codeJop,
                            category,
                            positionsJop,
                            bio,
                            rank
                        },
                    })
                }

                break;

        }


    } catch (e) {
        console.error(e);
    }
};