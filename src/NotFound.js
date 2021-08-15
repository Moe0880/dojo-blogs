import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <h1>Error (404)</h1>
            <h2>Sorry</h2>
            <p>That Page Cannot Be Found!</p>
            <Link to="/">Back to the home page....</Link>
        </div>
    )
}

export default NotFound
