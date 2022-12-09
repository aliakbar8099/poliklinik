/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let uniqCode = isLogin(req, res);


        switch (req.method) {
            case "GET":
                let getData = await db
                    .collection("times")
                    .find({})
                    .sort({ metacritic: -1 })
                    .toArray()

                 console.log(req.query);   
                if (!req.query["number"]) {
                    return res.status(400).send({ msg: "نامشخص بودن دیتا - خطا" })
                }
                if (!req.query["nCode"]) {
                    return res.status(400).send({ msg: "کدملی مشخص نیست !" })
                }
                if (!req.query["timeValue"]) {
                    return res.status(400).send({ msg: "نامشخص بودن دیتا - خطا-" })
                }

                res.status(200).send({ data: "ok" })
                break;

        }


    } catch (e) {
        console.error(e);
    }
};