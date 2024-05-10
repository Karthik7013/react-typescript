import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Travel Home +
            <Link to={'form'} >Form</Link>
        </div >
    )
}

export default Home