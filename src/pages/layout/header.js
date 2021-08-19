import React from 'react'
import { Link } from 'gatsby'
import '../../../public/static/css/style.css'

const Header = () => {
    return(
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/comparison'>Comparison</Link></li>
            </ul>
        </header>
    )
}

export default Header