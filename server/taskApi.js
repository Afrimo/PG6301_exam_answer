import express from "express";

export function TaskApi(db){
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

    api.post("/update-hours", async (req, res) => {
        const { taskIndex, newHours } = req.body;

        try {
            const collection = db.collection("tasks");
            const taskToUpdate = await collection.findOne({}); // Find the task to update

            if (!taskToUpdate) {
                return res.status(404).json({ message: "Task not found." });
            }

            // Update the task's hours field
            await collection.updateOne(
                { _id: taskToUpdate._id },
                { $set: { hours: newHours } }
            );

            res.sendStatus(200);
        } catch (error) {
            console.error("Error updating task hours:", error);
            res.status(500).json({ message: "Internal server error." });
        }
    });

    return api;
}