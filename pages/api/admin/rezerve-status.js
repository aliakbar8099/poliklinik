/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = await client.db("poliklinik");
        let times = await db.collection("times");
        let getData = await db
            .collection("times")
            .find({})
            .sort({ metacritic: -1 })
            .toArray()

        isLogin(req, res);

        if (!req.query["number"]) {
            return res.status(400).send({ msg: "نامشخص بودن دیتا - خطا" })
        }
        if (!req.query["nCode"]) {
            return res.status(400).send({ msg: "کدملی مشخص نیست !" })
        }
        if (!req.query["timeValue"]) {
            return res.status(400).send({ msg: "نامشخص بودن دیتا - خطا-" })
        }


        const find = await getData.find(i => i.NationalCode == req.query["nCode"] && i.number == req.query["number"])
        const find2 = await find?.times?.filter(i => i.tiemValue == parseInt(req.query["timeValue"]))
        res.status(200).send({ data: find2 })
        return false


    } catch (e) {
        console.error(e);
    }
};