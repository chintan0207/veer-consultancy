import React, { useContext, useEffect } from 'react'
import "./CountryPage.scss"
import MyContext from '../Common/Context/MyContext';
import { useParams } from 'react-router-dom';
import Layoutbox from '../Common/Layoutbox/Layoutbox';
import { Helmet } from 'react-helmet-async';

const CountryPage = () => {

    const { api, pageData, setPageData, setCountryName } = useContext(MyContext);
    const { servicename, countryname } = useParams();

    useEffect(() => {
        console.log(api.filter((item) => item.name === servicename)[0])
        const filteredData = api.filter((item) => item.name === servicename)[0];
        setPageData(filteredData);
        setCountryName(countryname)
    }, [servicename, api, countryname, setCountryName, setPageData]);

    return (
        <div className='country-page'>

            
<Helmet>
        <title>{servicename}/{countryname}</title>
        <meta name="description" content="Contact page" />
      </Helmet>
            <div className='service-bg'>
                <div className='heading'>
                    {pageData ? (
                        <>
                            <h2>{pageData.title}</h2>
                            <p><span>Home </span>/ {servicename} / {countryname}</p>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <div className='country-main'>
                <Layoutbox/>
            </div>
        </div>
    )
}

export default CountryPage