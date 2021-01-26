import React, {useEffect, useState} from "react";

export type ChatMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        const closeHandler = () => {
            setTimeout(createChanel, 3000)
        }

        function createChanel() {
            if (ws !== null) {
                ws?.removeEventListener('close', closeHandler)
            }
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }

        createChanel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }
    }, [])

    return (
        <div>
            <ChatMessages ws={wsChannel}/>
            <ChatMessageForm ws={wsChannel}/>
        </div>
    )
}

const ChatMessages: React.FC<{ ws: WebSocket | null }> = ({ws}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        };
        ws?.addEventListener('message', messageHandler)
        return () => {
            ws?.removeEventListener('message', messageHandler)
        }
    }, [ws])

    return (
        <div style={{height: 350, overflowY: "auto"}}>
            {messages.map((m, index) => <ChatMessage key={index} message={m}/>)}
        </div>
    )
}

const ChatMessage: React.FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div>
            <img style={{width: 40}} src={message.photo}/><b>{message.userName}</b>
            <div>{message.message}</div>
            <hr/>
        </div>
    )
}

const ChatMessageForm: React.FC<{ ws: WebSocket | null }> = ({ws}) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        let openHandler = () => {
            setReadyStatus('ready')
        };
        ws?.addEventListener('open', openHandler)
        return () => {
            ws?.removeEventListener('open', openHandler)
        }
    }, [ws])

    const sendMessage = () => {
        if (!message) {
            return
        }
        ws?.send(message)
        setMessage('')
    }

    return (
        <div>
            <div>
                <textarea onChange={(e) => setMessage(e.currentTarget.value)}
                          value={message}></textarea>
            </div>
            <div>
                <button disabled={ws === null && readyStatus !== 'ready'} onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default ChatPage