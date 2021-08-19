import React from 'react'
import Layout from './layout/layout.js'

// import images
import HandIMG from '../../public/static/img/hand.jpeg'
import SlowIMG from '../../public/static/img/slow.jpg'
import FastIMG from '../../public/static/img/fast.webp'
import LargeIMG from '../../public/static/img/large.jpeg'

const IndexPage = () => {
    return (
        <Layout>
            <p class="comparison">Feel the difference?</p>
            <img src={HandIMG} height="200" width="250" />
            <img src={HandIMG} height="300" width="350" />
            <img src={HandIMG} height="400" width="450" />
            <img src={SlowIMG} height="500" width="650" />
            <img src={FastIMG} height="500" width="700" />
            <img src={LargeIMG}  />
        </Layout>
    )
}

export default IndexPage