/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";
import bcrypt from "bcryptjs"
import { isLogin } from "../../../middleware/Auth";
import { ObjectId } from "mongodb";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let {
            title,
            svg
        } = req.body;

        let user = await db.collection("users");

        let category = await db.collection("category");

        const lists = await db
            .collection("users")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();


        switch (req.method) {
            case "POST":

                let uniqCode = isLogin(req, res);
                let findUser = await lists.find(i => i.NationalCode === uniqCode)

                if (findUser.rol != "admin") {
                    return res.status(403).send({ msg: "شما دسترسی ندارید", rol: findUser.rol })
                }

                if (!title, !svg) {
                    return res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }

                category.insertOne({
                    title,
                    svg
                });

                res.status(200).json({
                    msg: "دسته بندی خدمات با موفقیت اضافه شد"
                });

                break;
            case "GET":
                const categories = await db
                    .collection("category")
                    .find({})
                    .sort()
                    .toArray();

                res.status(200).json({ data: categories })

                break;

            case "DELETE":

                await db
                    .collection("category").remove({ _id: ObjectId(req.query["id"]) })

                res.status(200).json({ msg: "با موفقیت حذف شد" })

                break;

        }


    } catch (e) {
        console.error(e);
    }
};