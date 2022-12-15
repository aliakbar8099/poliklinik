/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let reserves = await db
            .collection("times")
            .find({})
            .sort({ metacritic: -1 })
            .toArray()

        switch (req.method) {
            case "GET":
                let uniqCode = isLogin(req, res);
                let lists = [];
                let doctorNcode = req.query["doctorNcode"];
                let nCodeUser = req.query["nCodeUser"];

                await reserves.map(i => {
                    let listUserReserve = i.times.filter(i => i.userNCode == nCodeUser);
                    listUserReserve.map(item=> {
                        lists.push(item)
                    })
                })

                res.status(200).json({
                    data: lists
                });

                break;
        }


    } catch (e) {
        console.error(e);
    }
};