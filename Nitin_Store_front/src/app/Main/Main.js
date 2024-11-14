import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import MainRoutes from './main.routes'

const Main = () => {
    return (
        <>
            <Navbar />
            <MainRoutes />
            <Footer />
        </>
    )
}

export default Main