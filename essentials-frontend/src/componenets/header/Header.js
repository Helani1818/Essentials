import React from 'react' 
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="row">
            <div>
                <h1><Link to="/">Essentials</Link></h1>
            </div>

            <div>
                <ul>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/login">Sign In</Link></li>
                </ul>
            </div>
            
            
        </header>

        
    )
}

export default Header