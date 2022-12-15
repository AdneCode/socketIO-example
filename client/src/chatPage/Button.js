import React from 'react';

export function Button(props) {
    //message from useState
    const { message } = props;
    //Onclick function
    const postMessage = () => {
        console.log(message);
    };
    return <button onClick={() => postMessage()}>Post message</button>;
}
