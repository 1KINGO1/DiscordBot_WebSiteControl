import {useState} from "react";
import axios from "axios";

export default function SendMessage({serverID, channelID, update}){

    let [content, setContent] = useState("")

    const clickHandler = async () => {
        let {data} = await axios.post('http://localhost:3001/main/api/sendMessage', {
            server: serverID,
            channel: channelID,
            content: content
        })
        if (data) {
            update(serverID, channelID)
        }
    }

    return (
        <div id='send'>
            <input id="sendMessage" type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
            <button id="sendMessageButton" onClick={clickHandler}>Отправить</button>
        </div>
    )
}