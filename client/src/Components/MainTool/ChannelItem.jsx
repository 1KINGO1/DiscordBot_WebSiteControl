import {useDispatch, useSelector} from "react-redux";

export default function ChannelItem({click, title, id, type}){

    let dispatch = useDispatch();
    let currentServer = useSelector(state => state.main.currentServer);
    let currentChannel = useSelector(state => state.main.currentChannel)

    if (type !== "GUILD_TEXT") return "";

    const clickHandler = async () => {
        dispatch({type: "SET_CHANNEL", payload: id});
        await click(currentServer, id);
    }

    return(
        <div className={currentChannel === id ? "channel current" : "channel"} onClick={clickHandler}>
            <p>{title}</p>
        </div>
    )
}