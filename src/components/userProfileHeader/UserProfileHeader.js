import ApiProvider from '../../services/ApiProvider/ApiProvider';
import Button from '../button/Button';
import { connect } from 'react-redux';
import Input from '../input/Input';
import PropTypes from 'prop-types';
import { setUser, updateUser } from '../../utils/features/userSlice';
import { useDispatch } from 'react-redux';
import React, { Fragment, useState, useEffect } from 'react';

const UserProfileHeader = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [editName, setEditName] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        /**
         * Call the ApiProvider, which will execute a POST request to the ArgentBank API with the jwtToken
         * If the authentication by the jwtToken is correct, we recover the user's data
         * Otherwise an error message is displayed
         * @param {object} e Event
         * @return {void}
         */
        const getProfile = async (e) => {
            // POST request
            const response = await new ApiProvider().getUserProfile(props.token);

            if (response.status !== 200) {
                return setErrorMessage('Error user : ' + response.statusText);
            }
            
            dispatch(setUser(response.data.body));
            setFirstName(response.data.body.firstName);
            setLastName(response.data.body.lastName);
            setErrorMessage('');
        }
        getProfile();
    }, [dispatch, props.token]);

    /**
     * Sends' 'firstName' & 'lastName' data to the ApiProvider, which will execute a POST request to the ArgentBank API
     * If the request is successful, we update the user's information
     * Otherwise an error message is displayed
     * @return {void}
     */
    async function changeUserProfile() {
        // PUT request
        const response = await new ApiProvider().setUserProfile(firstName, lastName, props.token);
        
        if (response.status !== 200) {
            return setErrorMessage('Error updating user : ' + response.statusText);
        }

        dispatch(updateUser(response.data.body));
        setEditName(false);
    }
    
    return (
        <section className='header profile'>
            {editName 
                ? (
                <Fragment>
                    <h1>Welcome back</h1>
                    {errorMessage.length > 0 && <div className='error-msg'>{errorMessage}</div>}
                    <Input 
                        className='header-profile-input' 
                        type='text'
                        placeholder={firstName}
                        action={(e)=> setFirstName(e.target.value)}
                    />
                    <Input 
                        className='header-profile-input' 
                        type='text'
                        placeholder={lastName}
                        action={(e)=> setLastName(e.target.value)}
                    />
                    <br />
                    <Button 
                        className='edit-button'
                        text='Save'
                        action={() => changeUserProfile()}
                        />
                    <Button 
                        className='edit-button' 
                        text='Cancel' 
                        action={() => setEditName(false)}
                        />
                </Fragment>
            ) : (
                <Fragment>
                    <h1>
                        Welcome back <br />
                        {props.user.firstName} {props.user.lastName}
                        {errorMessage.length > 0 && <div className='error-msg'>{errorMessage}</div>}
                    </h1>
                    <Button 
                        className='edit-button' 
                        text='Edit Name' 
                        action={() => setEditName(true)}
                    />
                </Fragment>
            )}
        </section>
    );
}

UserProfileHeader.propTypes = {
    token : PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        connected: state.user.connected,
        token: state.user.token,
        user: state.user.user,
    };
}

export default connect(mapStateToProps)(UserProfileHeader);
