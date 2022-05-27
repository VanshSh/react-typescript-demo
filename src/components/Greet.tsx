import React from 'react'

type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {
    return (
        <h1>
            {props.isLoggedIn
                ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
                : 'Please sign in.'}
        </h1>
    )
}

export default Greet
