import {useState } from "react";
import Channel from "../models/Channel";

interface Props {
    channels: Channel[];
};

const ListOfChannels = ({channels}: Props) => {
    const [searchedChannels, setSearchedChannels] = useState(channels);
    const [searchValue, setSearchValue] = useState("");

    let noResults = document.querySelector(".notification");
    const doSearch = () => {
        const filtered = channels.filter(filteredChannels => filteredChannels.channel.toLowerCase().includes(searchValue.toLowerCase(),0));
        
        if (filtered.length < 1) {
            noResults?.classList.remove("hidden")
        } else {
            setSearchedChannels(filtered)
            if (!noResults?.classList.contains("hidden")) {
                noResults?.classList.add("hidden")
            }
        }
    }

    return (
        <div className="wrapper">
            <h2 className="headline">List Of Channels</h2>
            <form>
                <input type="text" id="search" name="search" placeholder="Search By Channel Name" onChange={(e) => {
                    setSearchValue(e.target.value);
                }} />
                <label htmlFor="search" className="notification hidden">
                    Sorry, there isn't a channel with that name. Please search again
                </label>
                
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    doSearch();
                }}>Search</button>
                <p className="see-all" onClick={() => {
                    setSearchedChannels(channels);
                }}>See Full Channel List</p>
            </form>
            {searchedChannels.map((channel) => {
                return (
                    <div key={channel._id} className="single-channel">
                        <p className="single-channel__number">{channel.channel_number}</p>
                        <p className="single-channel__name">{channel.channel}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ListOfChannels;
