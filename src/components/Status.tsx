import React from 'react'
type StatusProps = {
    status: 'online' | 'offline' | 'idle'
}

const Status = (props: StatusProps) => {
    let message
    if (props.status === 'online') {
        message = 'Online'
    } else if (props.status === 'offline') {
        message = 'Offline'
    } else if (props.status === 'idle') {
        message = 'Idle'
    }

    return (
        <div>
            <h2>Status- {message}</h2>
        </div>
    )
}

export default Status
