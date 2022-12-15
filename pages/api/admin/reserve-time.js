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
                    !NationalCode) {
                    return res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
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
                    createtime: new Date().getTime()
                });

                res.status(200).json({
                    msg: "زمان حضور برای پزشک ثبت شد"
                });

                break;
            case "PUT":
                let times = await db.collection("times");
                let getData = await db
                    .collection("times")
                    .find({})
                    .sort({ metacritic: -1 })
                    .toArray()


                if (!req.query["number"]) {
                    return res.status(400).send({ msg: "نامشخص بودن دیتا - خطا" })
                }
                if (!req.query["nCode"]) {
                    return res.status(400).send({ msg: "کدملی مشخص نیست !" })
                }

                const find = getData.find(i => i.NationalCode == req.query["nCode"] && i.number == req.query["number"])

                if (find) {

                    times.updateOne({ "NationalCode": req.query["nCode"], "number": req.query["number"] },
                        { $set: { "times": [...find.times, req.body.complete] } }
                    )

                    res.status(200).json({
                        "msg": "ابدیت شد",
                    });

                } else {
                    times.insertOne({
                        NationalCode: req.query["nCode"],
                        number: req.query["number"],
                        times: [req.body.complete]
                    })

                    res.status(201).json({
                        "msg": "ساخته شد",
                    });

                }


                // reserve.updateOne({ "weekDay.listComplete.0.number": 0 },

                //     {
                //         $set: {
                //             "weekDay.listComplete.0": [{
                //                 "listComplete": req.body.complete
                //             }]
                //         }

                //     });



                break;
            case "GET":
                let uniqCode = isLogin(req, res);
                let findReserve = await reserve.findOne({ NationalCode: req.query["nnId"] });

                // const lists = await db
                //     .collection("users")
                //     .find({})
                //     .sort({ metacritic: -1 })
                //     .toArray();

                let finDoctor = await lists.filter(i => i.rol === "doctor")
                res.status(200).send({ data: findReserve })
                break;

        }


    } catch (e) {
        console.error(e);
    }
};