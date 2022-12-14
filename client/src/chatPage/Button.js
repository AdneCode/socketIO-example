import React from 'react';

export function Button(props) {
    //Name from useState
    const { message } = [props];
    //Onclick function
    const joinChat = () => {
        console.log(message);
    };
    return <button onClick={() => joinChat()}>button</button>;
}
