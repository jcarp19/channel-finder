import { ObjectId } from "mongodb";

export default interface Channel {
    _id?: ObjectId,
    channel_number: number,
    channel: string
}