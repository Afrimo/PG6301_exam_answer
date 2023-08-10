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


});


