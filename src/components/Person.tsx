import React from 'react'
import { PersonProps } from './Person.types'
const Person = (props: PersonProps) => {
    return (
        <div>
            I am {props.name.firstName} {props.name.lastName}
        </div>
    )
}

export default Person
