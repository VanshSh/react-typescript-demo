import React from 'react'
import logo from './logo.svg'
import './App.css'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'

function App() {
    const personName = {
        firstName: 'Vansh',
        lastName: 'Sharma',
    }

    const nameList = [
        {
            firstName: 'Vansh',
            lastName: 'Sharma',
        },
        {
            firstName: 'Mohit',
            lastName: 'Jain',
        },
        {
            firstName: 'Pranjal',
            lastName: 'Singh',
        },
    ]
    return (
        <>
            <div className='App'>
                <Greet
                    name='Vansh Sharma'
                    messageCount={10}
                    isLoggedIn={true}
                />
                <Person name={personName} />
                <PersonList names={nameList} />
            </div>
        </>
    )
}

export default App
