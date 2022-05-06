import React, { useEffect, useState } from 'react'
import { StyledPartner } from '../styles/Partner.style'
import {useContext} from 'react'
import {TokenContext} from '../context/TokenContext'
import { getMessages, getRooms, createMessage } from '../utils/api'
import { RoomsContext } from '../context/RoomsContext'
import { SocketContext } from '../context/SocketContext'

const Partner = () => {
    const context = useContext(TokenContext)
    const token = context.token
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
	const {rooms} = useContext(RoomsContext)
    const {socket} = useContext(SocketContext)

    useEffect(() => {
        socket.on('receive_message', (data) => {
            console.log('data:', data)
            setMessages(data)
        })
    }, [])

    console.log('rooms:', rooms)

    const room_id = rooms._id

    console.log('room_id:', room_id)
    const recipientId = '6272ede4dcf5f9c3dba8b056'

    const handleSendMsg = (e) => {
        e.preventDefault()
        socket.emit('chat_message', {token, room_id, recipientId, message})
    }

    console.log('rooms:', rooms)

    console.log('messages:', messages)

  return (
    <StyledPartner>
        <main>
            <section>
            <h1>{rooms ? rooms._id : 'No room'}</h1>
                <div>
                    <form>
                        <input type="text" placeholder='say something...' onChange={(e) => setMessage(e.target.value)} />
                        <button onClick={handleSendMsg}>SEND</button>
                    </form>
                </div>
            </section>
        </main>
    </StyledPartner>
  )
}

export default Partner