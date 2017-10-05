import React from 'react'
import {Link} from 'react-router-dom'

class Pages extends React.Component {
    render () {
        return (
            <div>
                <Link to="/actors">Page 1</Link>
                {/*<Link to="/actors/2">Page 2</Link>*/}
            </div>
        )
    }
}
export default Pages