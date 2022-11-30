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

                if (!NationalCode || !password) {
                    res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }

                let findUser = await user.findOne({ NationalCode });


                if (!findUser) {
                    return res.status(404).send({ msg: "چنین کابری وجود ندارد" })
                }

                const isMatch = await bcrypt.compareSync(password, findUser.password);

                if (!isMatch) {
                    return res.status(401).send({ msg: "کد ملی یا رمز عبور اشتباه است!" })
                }

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
                            token,
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