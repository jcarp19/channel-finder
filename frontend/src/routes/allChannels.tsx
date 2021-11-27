import React, { useEffect, useState } from "react";
import ListOfChannels from "../components/ListOfChannels";
import Channel from "../models/Channel";
import { fetchAllChannels } from "../services/channelAPI";

const AllChannels = () => {
    const [allChannels, setAllChannels] = useState<Channel[]>([])

    // everytime the page loads
    useEffect(() => { 
        fetchAllChannels().then(res => setAllChannels(res))
    }, [])

    return (
        <div className="AllChannels">
            <ListOfChannels channels={allChannels} />
        </div>
    )
};

export default AllChannels;