import express from "express";

export function MoviesApi(db){
    const api = express.Router();

    api.get("/", async (req, res) =>{

        const collection = db.collection("tasks")
        console.log(collection.title)

        const movies = await db
            .collection("tasks")
            .find({})
            .map(({ description, hours }) => ({ description, hours }))
            .toArray();

        res.json(movies)
    })

    api.post("/", (req, res) => {
        const {title, year, plot} = req.body;

        db.collection("tasks").insertOne({ description, hours })

        res.sendStatus(284)
    })

    return api;
}