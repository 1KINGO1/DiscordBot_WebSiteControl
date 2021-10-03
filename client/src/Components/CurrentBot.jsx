import {useEffect, useState} from "react";
import axios from "axios";

export default function CurrentBot(){

    let [count, setCount] = useState(0);

    let [avatar, setAvatar] = useState(null);
    let [name, setName] = useState(null);

    useEffect(async () => {
        let {data} = await axios.get("http://localhost:3001/main/api/current");

        setAvatar(data.avatar);
        setName(data.tag)
    }, [count])

    return (
        <div id="currentBot">
            <p id="currentBot-tag">{name}</p>
            <img src={avatar} alt="Current Bot Avatar" id="currentBot-avatar"/>
        </div>
    )
}