import React from 'react'
import '../css/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className ="home__image"
                    src="https://m.media-amazon.com/images/G/31/img16/app/Rhythm/Playstore_feature_graphic.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product 
                    id='101'
                    title= 'Redmi Note 10'
                    price= {21999}
                    image='https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note10-pro.jpg'
                    rating={5}
                    />
                    <Product 
                    id='102'
                    title= 'Xiaomi Mi Note 10'
                    price= {51999}
                    image='https://static.toiimg.com/photo/71816089/Xiaomi-Mi-Note-10.jpg'
                    rating={4}
                    />
                </div>
               
                <div className="home__row">
                    <Product 
                    id='103'
                    title= 'Xiaomi Mi 10'
                    price= {41999}
                    image=' https://www.gizmochina.com/wp-content/uploads/2020/09/Redmi-Note-10-500x500.jpg'
                    rating={4}
                    />
                    <Product 
                    id='104'
                    title= 'Redmi Note 10 Pro'
                    price= {28999}
                    image='https://cdn.alzashop.com/ImgW.ashx?fd=f16&cd=SKXI229c3'
                    rating={4}
                    />
                    <Product 
                    id='105'
                    title= 'Redmi Note 9'
                    price= {20999}
                    image='https://www.gizmochina.com/wp-content/uploads/2020/04/v-1-500x500.jpg'
                    rating={4}
                    />
                </div>
                
                <div className="home__row">
                <Product 
                    id='106'
                    title= 'Redmi Note 9 Pro'
                    price= {28999}
                    image='https://i01.appmifile.com/webfile/globalimg/in/cms/82E02A4B-C7C8-FD69-A2C7-8E135C1CE017.jpg'
                    rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
