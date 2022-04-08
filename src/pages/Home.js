import React from 'react'
import { FEATURES_CARDS_CONTENT } from '../utils/data/data';
import Banner from '../components/banner/Banner';
import FeatureItem from '../components/featureItem/FeatureItem'

function Home() {
  return (
    <main>
   
    <Banner />
    <section className='features'>
                <h2 className='sr-only'>Features</h2>
                {FEATURES_CARDS_CONTENT.map(({ id, imgSrc, imgAlt, title, description }) => (
                    <FeatureItem
                        key = {id}
                        imgSrc = {imgSrc}
                        imgAlt = {imgAlt}
                        title = {title}
                        description = {description}
                    />
                ))}
            </section> 
    </main>

  )
}

export default Home;