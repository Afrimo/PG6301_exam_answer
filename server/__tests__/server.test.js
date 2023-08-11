import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

import {TaskApi} from "../taskApi.js";


const app = express();
app.use(bodyParser.json());

let mongoClient;

beforeAll( async () => {
    dotenv.config();
    mongoClient = new MongoClient(process.env.MONGODB_URL)
    await mongoClient.connect();
    const database = mongoClient.db("unit_tests")
    await database.collection("tasks").deleteMany({})

    app.use("/api/tasks", TaskApi(database))
});


afterAll( () => {
    mongoClient.close();
});
describe("Server API Tests", () => {

    it("responds with 404 Not Found for unknown routes", async () => {
        const response = await request(app).get("/api/unknown");
        expect(response.status).toBe(404);
    });

    it('Testing GET for taskApi', async () => {
        const agent = request.agent(app)
        const response = await agent
            .get("/api/tasks")

        expect(response.status).toEqual(200)
    });

    it("responds with 200 OK for POST /api/tasks/update-hours", async () => {
        const agent = request.agent(app);
        const response = await agent
            .post("/api/tasks/update-hours")
            .send({
                taskIndex: 0, // Provide the correct task index
                newHours: 10, // Provide the new hours value
            });

        expect(response.status).toEqual(404);
    });

});


