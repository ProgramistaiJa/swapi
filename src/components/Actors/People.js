import React from 'react'

const People = (props) => (
    <div>

        {props.peopleStatus && props.filmsStatus?<h1>People</h1>:null}

        {
            props.people && props.films
                ?(props.people).map(item=> item.gender === 'male' ||
                item.gender ===  'female'
                    ?   <div>
                            <h2>{item.name}</h2>
                            <div>
                                {
                                    (item.films).map(film=>
                                        <p>
                                            {
                                                //działa poprawnie jeśli ilość filmów jest mniejsza niż 10
                                                props.films[parseInt(film.substr(-2, 1),10)-1]
                                            }
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                    : null
                )
                :'Dane się pobierają...'
        }
    </div>
)
export default People