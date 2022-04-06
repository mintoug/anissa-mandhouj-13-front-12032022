import Button from '../button/Button';
import '../../css/main.css';
import React from 'react';

const Card = ({title, amount, description}) => {
    return (
        <section className='account'>
            <article className='accountContentWrapper'>
                <h3 className='accountTitle'>{title}</h3>
                <p className='accountAmount'>{amount}</p>
                <p className='accountAmountDescription'>{description}</p>
            </article>
            <div className='accountContentWrapper cta'>
                <Button className='transactionButton' text='View transactions'/>
            </div>
        </section>
    );
}
export default Card;