import React from 'react'

const People = (props) => (
    <div>
        {
            props.people
                ?(props.people).map(item=>
                <div>
                    <p>{item.name}</p>
                    <p>{item.films}</p>
                </div>
                )
                :'Dane się pobierają...'
        }
    </div>
)
export default People