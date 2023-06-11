import React from 'react'
import BookList from '../BookList/BookList'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './MainPage.css'
import Footer from '../Footer/Footer'
import landingPhoto from './landingPhoto.png';
import a from './a.png'
import c from './c.png'
import f from './f.png'

const MainPage = () => {
    return (
        <div>
        <Navbar />
        <div className='container'>
            <div className='containerUp photoLanding'  style={{ backgroundImage: `url(${landingPhoto})`,backgroundRepeat: 'no-repeat' , backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <div className='buttonRentNow'>Rent Now</div>
            </div>
            <div className='containerMiddle'>
                <div className='whyChoose'>  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;Why choose Paperback ?</div>
                <div className='features'>
                    <div className='feature1'><img className='photoLanding' src={f} alt='Landing Photo' /></div>
                    <div className='feature2'><img className='photoLanding' src={c} alt='Landing Photo' /></div>
                    <div className='feature3'><img className='photoLanding' src={a} alt='Landing Photo' /></div>
                </div>
            </div>
            <div className='containerBelow'>
                <div className='aboutUs'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us</div>
                <div className='detailsAboutUs'>
                <div className='helpDetailAboutUs'>
                We are in a mission to make physical books a lot 
                more accessible by providing one-stop solution for 
                lending and borrowing books.
                </div>
                </div>
            </div>
        </div>
                
        <BookList />
        <Footer />
        </div>
    )
}

export default MainPage
