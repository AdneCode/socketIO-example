import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SocketContext } from '../socket';

export function Button(props) {
    //Name from useState
    const { name } = props;
    //useNavigate to change the page to the chatPage
    const navigate = useNavigate();
    const socket = useContext(SocketContext);
    //Onclick function
    const joinChat = () => {
        console.log(name);
        socket.emit('joinChat', name);
        navigate('/chat');
    };
    return <button onClick={() => joinChat()}>Join chat</button>;
}
