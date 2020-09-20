import React, { useState } from 'react'
//import styles from './Home.module.css'
import './Home.css';

const Home = () => {

    const [chosenImg, setChosenImg] = useState('');
    const [visibleLightRoom, setVisibleLightRoom] = useState(false);
    const [zoomImg, setZoomImg] = useState(false);

    const [moveZoom, setMoveZoom] = useState('');

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
        console.log(event.target.getAttribute('imgpath'))
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
        setZoomImg(false);
    }

    const zoomPicture = (event) => {
        setZoomImg(!zoomImg);
        event.stopPropagation();
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

                <img src={chosenImg} className={`lightroom-image ${zoomImg ? 'zoom-image' : ''}`} alt='zoom-picture'
                    style={{ moveZoom }} onClick={zoomPicture} />

            </div>
        </div>
    )
}

export default Home