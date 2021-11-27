import express from 'express';
import { getClient } from '../db';
import Channel from '../models/Channel';
// import { ObjectId } from 'mongodb';

const routes = express.Router();

routes.get("/spectrum", async (req, res) => {
    try {
        const client = await getClient();
        const results = await client.db().collection<Channel>("channels").find().toArray();
        res.json(results); // send JSON results
    } catch (err) {
        console.error("FAIL", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

export default routes;