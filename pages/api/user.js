/* eslint-disable import/no-anonymous-default-export */
import { data } from "autoprefixer";
import { ObjectID } from "bson";
import clientPromise from "../../lib/mongodb";
import { isLogin } from "../../middleware/Auth";

export default async (req, res) => {
    let user = []
    try {

        const client = await clientPromise;
        const db = client.db("poliklinik");

        let uuN = isLogin(req, res);

        const lists = await db
            .collection("users")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();

        let findUser = await lists.find(i => i.NationalCode === uuN)

        const {
            _id,
            fullname,
            NationalCode,
            phoneNumber,
            birthDay,
            email,
            city,
            adderess,
            timeCreateAccount,
            rol,
            img
        } = findUser

        switch (req.method) {
            case "GET":

                // const user = await db
                //     .collection("users")
                //     .find({})
                //     .sort({ metacritic: -1 })
                //     .limit(10)
                //     .toArray();


                res.status(200).send({
                    data: {
                        _id,
                        fullname,
                        NationalCode,
                        phoneNumber,
                        birthDay,
                        email,
                        city,
                        adderess,
                        timeCreateAccount,
                        rol,
                        img
                    }
                })
                break;
            case "PUT":
                let {
                    _id,
                    fullname,
                    NationalCode,
                    phoneNumber,
                    birthDay,
                    email,
                    city,
                    adderess,
                    timeCreateAccount,
                    rol,
                    img
                } = req.body

                const users = await db.collection("users")
                let oneUser = await db.collection("users").findOne({ NationalCode: uuN })

                await users.updateOne(
                    { _id: oneUser._id },
                    {                     // Update document
                        $set: {
                            fullname,
                            NationalCode,
                            phoneNumber,
                            birthDay,
                            email,
                            city,
                            adderess,
                            timeCreateAccount,
                            rol,
                            img
                        },
                    },
                )

                res.status(200).send({ msg: "با موفقیت بروز رسانی شد" })
                break;

        }


    } catch (e) {
        console.error(e);
    }
};