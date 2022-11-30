/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../lib/mongodb";
import { isLogin } from "../../middleware/Auth";

export default async (req, res) => {
    let user = []
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");
        let bodyObject = req.body


        switch (req.method) {
            case "GET":
                const user = await db
                    .collection("users")
                    .find({})
                    .sort({ metacritic: -1 })
                    .limit(10)
                    .toArray();

                isLogin(req, res, {
                    user,
                })
                break;

        }


    } catch (e) {
        console.error(e);
    }
};