function Message({text}) {
    return ( 
        <div className="messsage">
            <h1 className="messsage-header">Текст сообщения:</h1>
            <p>{text}</p>
        </div>
     );
}

export default Message;