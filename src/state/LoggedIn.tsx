import { useState } from 'react'

export const LoggedIn = () => {
    const [iseLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h3>User is {iseLoggedIn ? 'logged in' : 'logged out'}</h3>
        </div>
    )
}
