import './App.css'
import Greet from './components/Greet'
import Heading from './components/Heading'
import Oscar from './components/Oscar'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'

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
                <Greet name='Mohit Jain' isLoggedIn={true} />
                <Person name={personName} />
                <PersonList names={nameList} />
                <hr />
                <hr />
                <Status status={'online'} />
                <hr />
                <hr />
                <Heading>Placeholder text</Heading>
                <Oscar>
                    <Heading>ABC</Heading>
                </Oscar>
            </div>
        </>
    )
}

export default App
