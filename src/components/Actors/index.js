import React from 'react'
import People from "./People";

class Actors extends React.Component {

    state = {

    };

    _getData = () => {
        fetch('https://swapi.co/api/people/')
            .then( (response) => response )
            .then(response => response.json())
            .then(data=>data.results)
            .then(data=>{
                console.log(data)
                return data
            })
            .then(people =>
                this.setState(
                {
                    people: people,
                    peopleStatus: 'loaded'
                }
            ))
            .catch(()=> this.setState({ peopleStatus: 'error'}))
    };


    componentWillMount() {
        this._getData();
    };

    render () {

        const {
            peopleStatus,
            people
        } = this.state;

        return (
            <div>
                <h1>People</h1>
                <p>
                    {peopleStatus}
                </p>
                <People
                    people = {people}
                />

            </div>

        )
    }
}
export default Actors