import React from 'react';
import { SocketContext } from '../socket';
import { useContext } from 'react';

export function Button(props) {
    const socket = useContext(SocketContext);
    const { message } = props;
    const postMessage = () => {
        socket.emit('postMessage', message);
    };
    return <button onClick={() => postMessage()}>Post message</button>;
}
