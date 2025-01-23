import { useState } from "react";
import React from "react";
import './CSS/Chat.css'

function Chat() {
    const [text, setText] = useState('')
    const [chatArray, setChatArray] = useState([])

    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    const addMessages = () => {
        if (text.trim()) {
            const date = new Date()
            const hours = formatTime(date.getHours())
            const minutes = formatTime(date.getMinutes())
            const seconds = formatTime(date.getSeconds())
            const time = `${hours}:${minutes}:${seconds}`

            const newMessage = {
                id: Date.now(),
                message: text,
                time: time
            }

            setChatArray((prevChatArray) => [...prevChatArray, newMessage]);
            setText('');
        }
    }

    return (
        <div className="chat-container">
            {chatArray.map((item) => (
                <div key={item.id}>
                    <p className="chat-message">{item.message}</p>
                    <div className="chat-time">{item.time}</div>
                </div>
            ))}
            <div className="chat-input-container">
                <input
                    className="chat-input"
                    value={text}
                    onChange={(ev) => setText(ev.target.value)}
                    placeholder="Введите сообщение..."
                />
                <button className="chat-button" onClick={addMessages}>Отправить сообщение</button>
            </div>
            <button className="chat-button clear-button" onClick={() => setChatArray([])}>Очистить чат</button>
        </div>
    )
}

export default Chat;