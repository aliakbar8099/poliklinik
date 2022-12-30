/* eslint-disable import/no-anonymous-default-export */
import { data } from "autoprefixer";
import { ObjectID } from "bson";
import clientPromise from "../../lib/mongodb";
import { isLogin } from "../../middleware/Auth";
import bcrypt from "bcryptjs"

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

        switch (req.method) {
            case "PUT":

                const salt = await bcrypt.genSalt(10);

                let {
                    oldPassword,
                    newPassword
                } = req.body

                if (!oldPassword || !newPassword) {
                    res.status(400).send({ msg: "هیچ فیلدی نمی تواند خالی باشد" })
                }

                const users = await db.collection("users")
                let oneUser = await db.collection("users").findOne({ NationalCode: uuN })

                const isMatch = await bcrypt.compareSync(oldPassword, oneUser.password);

                if (!isMatch) {
                    return res.status(401).send({ msg: "رمز عبور اشتباه است" })
                }

                // conver new password to hash
                const password = await bcrypt.hash(newPassword, salt);

                await users.updateOne(
                    { _id: oneUser._id },
                    {                     // Update document
                        $set: {
                            password
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