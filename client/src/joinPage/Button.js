import React from 'react'

export function Button(props) {
    //Name from useState
    const {name} = [props]
    //Onclick function
    const joinChat = () => {
        console.log(name)
    }
  return (
    <button onClick={() => joinChat()}>button</button>
  )
}
