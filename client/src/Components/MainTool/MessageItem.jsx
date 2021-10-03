export default function MessageItem({content,isBot, id, avatar}){
    return(
        <div className="message">
            <div className='avatar'>
                <img src={avatar} alt={id + "avatar"}/>
            </div>
            <div className='message-content'>
                <p className='message-tag'>{id} {isBot ? <span className="BOT">БОТ</span> : ""}</p>
                <p className='message-cont'>{/http[s]?:\/\//.test(content) ? <a href={content}>{content.length >= 100 ? content.slice(0,100) + "..." : content}</a> : content.length >= 100 ? content.slice(0,100) + "..." : content}</p>
            </div>
        </div>
    )
}