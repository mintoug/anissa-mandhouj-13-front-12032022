import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Error from '../pages/Error';
import LogInJWT from '../utils/storage/LogInJWT';
import React from 'react';

const App = (props) => {
  
    // to log in the user using the JWT Token
    LogInJWT();

    return (
        <div className="App">
            <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/'> <Home /></Route>
                        <Route exact path='/login'> <Login /> </Route>
                        <Route exact path='/profile'> <Profile /> </Route>
                        <Route exact path='*'> <Error /></Route>
                    </Switch>
                    <Footer />
            </Router>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        connected: state.user.connected,
    };
}

export default connect(mapStateToProps)(App);