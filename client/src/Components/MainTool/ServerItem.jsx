import {useDispatch, useSelector} from "react-redux";

export default function ServerItem({click, id, avatar}){

    let dispatch = useDispatch();

    let currentServer = useSelector(state => state.main.currentServer)

    const clickHandler = () => {
        dispatch({type: "SET_SERVER", payload: id});
        click(id);
    }

    return(
        <div className={currentServer === id ? "server current" : "server"}>
            <img src={avatar} alt={id + " avatar"} onClick={clickHandler}/>
        </div>
    )
}