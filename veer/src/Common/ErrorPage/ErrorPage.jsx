import React from 'react'
import "./ErrorPage.scss"
import { Link } from 'react-router-dom'
import ErrorIcon from "../../Assets/images/errorIcon.png"
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <div className="error-page">
<Helmet>
        <title>Error:404</title>
        <meta name="description" content="Contact page" />
      </Helmet>

            <div className="error-content">
                <img src={ErrorIcon} alt="error" />
                <h1 className="error-title"><span> Page Not Found !</span></h1>
                <p className="error-message">Something went wrong </p>
                <p className="error-code">Error Code: 404</p>
                <Link to="/" className="error-link">Go to Home</Link>
            </div>
        </div>
    )
}

export default ErrorPage