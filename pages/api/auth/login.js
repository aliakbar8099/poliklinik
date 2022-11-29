/* eslint-disable import/no-anonymous-default-export */
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
    try {

        const client = await clientPromise;
        const db = client.db("todos");
        let bodyObject = JSON.parse(req.body);
        switch (req.method) {
            case "POST":
                await db.collection("names").insertOne({
                    name : bodyObject.name
                });
                res.status(201).json({msg:"ok add name"})
                break;

        }

        // const movies = await db
        //     .collection("users")
        //     .find({})
        //     .sort({ metacritic: -1 })
        //     .limit(10)
        //     .toArray();


    } catch (e) {
        console.error(e);
    }
};