/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let {
            rezerves=[],
            user=[]
        } = req.body;

        let reserve = await db.collection("reserve-user");

            
        switch (req.method) {
                case "POST":
                    let uniqCode = isLogin(req, res);
                    // let findUser = await lists.find(i => i.NationalCode === uniqCode)
          
                    if (user.length == 0 || rezerves.length == 0) {
                        return res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                    }

                    reserve.insertOne({
                        ...user,
                        rezerves
                    });

                    res.status(200).json({
                        msg: "رزرو شما انجام شد!"
                    });

                break;
        }


    } catch (e) {
        console.error(e);
    }
};