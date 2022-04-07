import Button from '../button/Button';
import '../../css/main.css';
import React from 'react';

const Card = ({title, amount, description}) => {
    return (
        <section className='account'>
            <article className='account-content-wrapper'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-amount'>{amount}</p>
                <p className='account-amount-description'>{description}</p>
            </article>
            <div className='account-content-wrapper cta'>
                <Button className='transaction-button' text='View transactions'/>
            </div>
        </section>
    );
}
export default Card;