import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { logOut } from '../../utils/features/userSlice';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

const Header = (props) => {
    const dispatch = useDispatch();

    return (
        <header>
            <nav className='main-nav'>
                <Link to='/' className='main-nav-logo'>
                    <img className='main-nav-logo-image' src={logo} alt='Argent Bank Logo' />
                    <h1 className='sr-only'>Argent Bank</h1>
                </Link>

            <nav className='nav-log'>
                {props.connected 
                ? (
                    <Fragment>
                        <div>
                            <Link to='/profile' className='main-nav-item' >
                                <i className='fa fa-user-circle'></i>
                                {props.user.firstName}
                            </Link>
                        </div>
                        <div>    
                            <Link
                                to={'/login'}
                                className='main nav-item'
                                onClick={() => dispatch(logOut())}>
                                <i className='fas fa-sign-out-alt'></i>
                                Sign out
                            </Link>
                        </div>
                    </Fragment>
                ) 
                : (
                    <div>
                        <Link to='/login' className='main-nav-item' >
                            <i className='fa fa-user-circle'></i>
                            Sign In
                        </Link>
                    </div>
                    )}
                </nav>
            </nav>
        </header>
    );
}

const mapStateToProps = state => {
    return {
        connected: state.user.connected,
        user: state.user.user,
    };
}

Header.propTypes = {
    connected : PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(Header);