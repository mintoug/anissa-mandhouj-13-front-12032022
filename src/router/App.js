import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { connect } from 'react-redux';
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Home from "../pages/Home"
import Error from "../pages/Error";
import Footer from "../components/footer/Footer.js";
import LogInJWT from "../utils/storage/LogInJWT";
import PropTypes from 'prop-types';
import Header from "../components/header/Header";

function App() {
  LogInJWT();
  return (
    <div className="App">
     
  <BrowserRouter>
  <Header />
    <Switch>
      <Route path="/" component = {Home} />  
      <Route path="/login"  component = {Login} /> 
      <Route path="/profile" component = {Profile} /> 
      <Route path="*" component = {Error} />  
    </Switch>
    <Footer />

  </BrowserRouter>
    </div>
  );
}
const mapStateToProps = state => {
  return {
      connected: state.user.connected,
  };
}

App.propTypes = {
  connected : PropTypes.bool.isRequired,
}

export default connect(mapStateToProps)(App);
