import React, { useState } from 'react';
import { useContext } from 'react';
import { SocketContext } from '../socket';

export function UserList() {
    const hardcodedUsers = [
        {
            name: 'Desperate student',
        },
        {
            name: 'Other student',
        },
        {
            name: 'The Belgian Golum',
        },
    ];
    const [userList, setUserList] = useState(hardcodedUsers);
    const socket = useContext(SocketContext);
    socket.on('updateUsers', (userList) => {
        console.log(userList);
        setUserList(userList);
    });

    return (
        <div>
            <h1>UserList</h1>
            {userList.map((user) => {
                return <h3 key={user.name}>{user.name}</h3>;
            })}
        </div>
    );
}
