import React from 'react';

const FeatureItem = ({imgSrc, imgAlt, title, description}) => {
    return (
        <article className='feature-item'>
            <img src={imgSrc} className='feature-icon' alt={imgAlt}/>
            <h3 className='featureItemTitle'>{title}</h3>
            <p>{description}</p>
        </article>
    );
}
 export default FeatureItem;