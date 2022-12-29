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
            texts,
            imgs
        } = req.body;

        let user = await db.collection("users");

        let mianPage = await db.collection("mian-page");

        const mainList = await db
            .collection("mian-page")
            .find({})
            .sort()
            .toArray();

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

                if (!texts, !imgs) {
                    return res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }

                if (mainList) {
                    await mianPage.update(
                        { _id: ObjectId(mainList[0]._id) },   // Query parameter
                        {                     // Update document
                            $set: { texts, imgs},
                        },
                        { upsert: true }      // Options
                    )
                    return res.status(200).json({
                        msg: "صفحه اصلی بروز رسانی شد"
                    });
                }

                mianPage.insertOne({
                    texts,
                    imgs
                });

                res.status(200).json({
                    msg: "صفحه اصلی ساخته شد"
                });

                break;
            case "GET":

                res.status(200).json({ data: mainList[0] })

                break;
        }


    } catch (e) {
        console.error(e);
    }
};