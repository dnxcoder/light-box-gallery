import React, { useState } from 'react'
//import styles from './Home.module.css'
import './Home.css';

const Home = () => {

    const [chosenImg, setChosenImg] = useState('');
    const [visibleLightRoom, setVisibleLightRoom] = useState(false);

    const [zoomPicBack, setZoomPickBack] = useState(false);

    const imagesData = [
        {
            "imagepath": "./images/a.jpg",
            "title": "Red Car",
            "uploadeDate": "2 May 2020",
            "index": "0"
        }, {
            "imagepath": "./images/b.jpg",
            "title": "Blue Car",
            "uploadeDate": "2 May 2020",
            "index": "1"
        }, {
            "imagepath": "./images/c.jpg",
            "title": "Green Car",
            "uploadeDate": "2 May 2020",
            "index": "2"
        }, {
            "imagepath": "./images/d.jpg",
            "title": "Purple Car",
            "uploadeDate": "2 May 2020",
            "index": "3"
        }, {
            "imagepath": "./images/e.jpg",
            "title": "Yellow Car",
            "uploadeDate": "2 May 2020",
            "index": "4"
        }, {
            "imagepath": "./images/f.jpg",
            "title": "Red Car",
            "uploadeDate": "2 May 2020",
            "index": "5"
        },

    ]

    const setPicture = (event) => {
        
        setChosenImg(event.target.getAttribute('imgpath'));
        setVisibleLightRoom(true);
    }

    const photos = imagesData.map((value, index) => {
        return (
            <div onClick={setPicture} imgPath={value.imagepath} className='photo-container'>
                <img src={value.imagepath} className='avoid-clicks' imgPath={value.imagepath} />
            </div>

        )
    })

    const closeLightRoom = () => {

        setVisibleLightRoom(false);
        setZoomPickBack(false);
    }

    const zoomPicBackground = (event) => {
        setZoomPickBack(!zoomPicBack);
        event.stopPropagation();

        const backPick = document.querySelector('.lightroom-pic');

        backPick.addEventListener('mousemove', (e) => {

            let width = backPick.offsetWidth;
            let height = backPick.offsetHeight;

            let mouseX = e.offsetX;
            let mouseY = e.offsetY;

            let bgPosX = (mouseX / width * 100);
            let bgPosY = (mouseY / height * 100);

            

            backPick.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
        })

        backPick.addEventListener('mouseleave', ()=> {
            backPick.style.backgroundPosition='center';
        })
    }



    return (
        <div className='master-container'>
            <div className='container'>
                <div className='photos-container'>
                    {photos}
                </div>
            </div>
            <div className={`lightroom-container ${visibleLightRoom ? 'show-lightroom' : ''} `}
                onClick={closeLightRoom} >

                 <div className='image-wrap'>
                    <div className={`lightroom-pic ${zoomPicBack ? 'zoom-lightroom-pic' : ''}`} style={{ backgroundImage: `url('${chosenImg}')` }}
                        onClick={zoomPicBackground}></div>
                </div> 


              

            </div>
        </div>
    )
}

export default Home