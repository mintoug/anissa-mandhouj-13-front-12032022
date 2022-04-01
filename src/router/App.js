import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Home from "../pages/Home"
import Error from "../pages/Error";
import Footer from "../components/footer/Footer";



function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
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

export default App;
