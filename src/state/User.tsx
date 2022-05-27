import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Vansh Sharma',
            email: 'vanshsharma9354@gmail.com',
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <h3>User name is {user.name} </h3>
            <h3>User name is {user.email} </h3>
        </div>
    )
}
