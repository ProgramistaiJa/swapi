import React from 'react'
import {Link} from 'react-router-dom'

class Pages extends React.Component {
    render () {
        return (
            <div>
                <Link to="/actors">Page 1</Link> *
                <Link to="/actors/2">Page 2</Link> *
                <Link to="/actors/3">Page 3</Link> *
                <Link to="/actors/4">Page 4</Link> *
                <Link to="/actors/5">Page 5</Link> *
                <Link to="/actors/6">Page 6</Link> *
                <Link to="/actors/7">Page 7</Link> *
                <Link to="/actors/8">Page 8</Link>
            </div>
        )
    }
}
export default Pages