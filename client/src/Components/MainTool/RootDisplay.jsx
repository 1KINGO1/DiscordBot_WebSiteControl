import {useEffect, useRef, useState} from "react";
import axios from "axios";
import ServerItem from "./ServerItem";
import ChannelItem from "./ChannelItem";
import {useSelector} from "react-redux";
import MessageItem from "./MessageItem";
import SendMessage from "./SendMessage";

export default function RootDisplay(){

    let [count, setCount] = useState(null);

    let [servers, setServers] = useState([]);
    let [channels, setChannels] = useState([]);
    let [messages, setMessages] = useState([]);

    let ref = useRef();


    let [autoUpdChannel, setAutoUpdateChannel] = useState(false);
    let [autoUpdServer, setAutoUpdateServer] = useState(false);
    let currentServer = useSelector(state => state.main.currentServer);
    let currentChannel = useSelector(state => state.main.currentChannel)

    useEffect(async () => {
        let {data} = await axios.get('http://localhost:3001/main/api/guilds')
        setServers(data.servers);
    }, [count])

    const serverClickHandler = async (server) => {
        let {data} = await axios.get('http://localhost:3001/main/api/channels?server=' + server);
        console.log(data);
        setMessages([]);
        setChannels(data.channels);
        setAutoUpdateChannel(false);
        setAutoUpdateServer(false);
    }

    const channelClickHandler = async (server, channel) => {
        let {data} = await axios.get('http://localhost:3001/main/api/messages?server=' + server + "&channel=" + channel + "&limit=100")
        setMessages(data.messages.reverse());
        ref.current.scrollTop = ref.current.scrollHeight;
        setAutoUpdateChannel(channel);
        setAutoUpdateServer(server)
    }

    const update = async () => {
        if (!currentServer || !currentChannel || !autoUpdServer || !autoUpdChannel) return;
        let {data} = await axios.get('http://localhost:3001/main/api/messages?server=' + autoUpdServer + "&channel=" + autoUpdChannel + "&limit=100")
        setMessages(data.messages.reverse());
    }

    return (
        <div id="display">
            <div id="servers">
                {servers ? servers.map(server => <ServerItem click={serverClickHandler} key={server.id} id={server.id} avatar={server.avatar}/>) : ""}
            </div>
            <div id="channels">
                {channels ? channels.map(ch => <ChannelItem click={channelClickHandler} key={ch.id} id={ch.id} title={ch.title} type={ch.type}/>) : ""}
            </div>
            <div id='channel-contents' ref={ref}>
                {messages ? messages.map(mes => <MessageItem id={mes.tag} isBot={mes.isBot} content={mes.content} avatar={mes.avatar}/>) : ""}
                <SendMessage serverID={currentServer} channelID={currentChannel} update={channelClickHandler}/>
            </div>
        </div>
    )
}