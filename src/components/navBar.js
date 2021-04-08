import React from 'react'
import { Link } from 'react-router-dom'



function NavBar() {
    return (

        <>
            <Link to="/Messages">Messages</Link>
            <Link to="/Homepage">Homepage</Link>
        </>
    )
}
export default NavBar