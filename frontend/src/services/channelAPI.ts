import Channel from "../models/Channel";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;


if (!baseUrl) {
    console.error("Missing config REACT_APP_API_URL");
}

export function fetchAllChannels():Promise<Channel[]>{
    return axios.get<Channel[]>(`${baseUrl}/spectrum`)
    .then(res => res.data);
}