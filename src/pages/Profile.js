import React from 'react';
import { ACCOUNTS_CONTENT } from '../utils/data/data';
import Card from '../components/card/card';
import UserProfileHeader from '../components/userProfileHeader/UserProfileHeader';

function Profile() {
  return (
    <main className='main bg-dark'>
    <UserProfileHeader />
    <h2 className='sr-only'>Accounts</h2>
      
            {ACCOUNTS_CONTENT.map(({ id, title, amount, description }) => (
                    <Card
                        key = {id}
                        title = {title}
                        amount = {amount}
                        description = {description}
                    />
                ))}
    </main>
  
  );
}

export default Profile
