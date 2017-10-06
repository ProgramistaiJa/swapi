import React from 'react'
import People from "./People";

class Actors extends React.Component {

    state = {

    };

    _getData = () => {
        //pobranie filmów
        fetch('https://swapi.co/api/films/')
            .then(response => response.json())
            .then(data=>data.results)
            .then(films=>films.map(film => film.title))
            .then(films=>{
                console.log(films)
                return films
            })
            .then(films=>this.setState({
                films: films,
                filmsStatus: 'loaded'
            }))
            .catch(()=> this.setState({ filmsStatus: 'error'}))


        //pobieranie postaci
        console.log(this.props.match)
        console.log(this.props.match.params.pageId)
        console.log(`https://swapi.co/api/people/${this.props.match.params.pageId}/`)
        //https://swapi.co/api/people/?page=2",

        fetch(
        this.props.match.params.pageId
            ? `https://swapi.co/api/people/?page=${this.props.match.params.pageId}`
            :'https://swapi.co/api/people/')
        //fetch(`https://swapi.co/api/people/${id}/`)
            .then(response => response.json())
            .then(data=>data.results)
            .then(people=>{
                console.log(people)
                return people
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
            filmsStatus,
            people,
            films
        } = this.state;

        return (
            <div>

                <People

                    people = {people}
                    films = {films}
                    peopleStatus = {peopleStatus}
                    filmsStatus = {filmsStatus}
                />

            </div>

        )
    }
}
export default Actors