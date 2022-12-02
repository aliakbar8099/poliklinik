/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let {
            NationalCode,
            weekDay,
            inputTime,
            exportTime,
            lengthTimeVisit,
        } = req.body;


        let reserve = await db.collection("reserves");

        const lists = await db
            .collection("users")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();


        let uniqCode = isLogin(req, res);
        let findUser = await lists.find(i => i.NationalCode === uniqCode)
        let findUser2 = await lists.find(i => i.NationalCode === NationalCode)

        switch (req.method) {
            case "POST":

                if (findUser.rol != "admin") {
                    return res.status(403).send({ msg: "شما دسترسی ندارید", rol: findUser.rol })
                }

                if (!weekDay ||
                    !NationalCode ||
                    !inputTime ||
                    !exportTime ||
                    !lengthTimeVisit) {
                    res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }
                if (findUser2.NationalCode != NationalCode) {
                    return res.status(402).send({ msg: "چنین کابری وجود ندارد!" })
                }

                if (await reserve.findOne({ NationalCode })) {
                    return res.status(402).send({ msg: "شما قبلا زمان رزرو را مشخص کردید" })
                }

                reserve.insertOne({
                    NationalCode,
                    weekDay,
                    inputTime,
                    exportTime,
                    lengthTimeVisit,
                    createtime: new Date().getTime()
                });

                res.status(200).json({
                    msg: "زمان حضور برای پزشک ثبت شد"
                });

                break;
            case "GET":
                // let uniqCode = isLogin(req, res);
                // let findUser = await user.findOne({ NationalCode: uniqCode });


                // if (findUser.rol != "admin") {
                //     return res.status(403).send({ msg: "شما دسترسی ندارید", rol: findUser.rol })
                // }

                // const lists = await db
                //     .collection("users")
                //     .find({})
                //     .sort({ metacritic: -1 })
                //     .toArray();

                // let finDoctor = await lists.filter(i => i.rol === "doctor")
                // res.status(200).send({ data: finDoctor })
                break;

        }


    } catch (e) {
        console.error(e);
    }
};