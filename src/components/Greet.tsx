import React from 'react'

type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}
const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (
        <h1>
            {props.isLoggedIn
                ? `Welcome ${props.name}! You have ${messageCount} unread messages.`
                : 'Please sign in.'}
        </h1>
    )
}

export default Greet
