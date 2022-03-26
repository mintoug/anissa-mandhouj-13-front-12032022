import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from "../pages/User";
import Signin from "../pages/Signin";
import Home from "../pages/Home"
import Error404 from "../pages/Error404";
import Footer from "../components/footer/Footer";
import Privaterouter from "../components/footer/privaterouter/Privaterouter";
const user = {
  isConnected : false
}

function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}>  </Route>
      <Route path="/user" element={
                <Privaterouter user={user}>
                  <User />
                </Privaterouter>}>  
      </Route>
      <Route path="/signin" element={<Signin />}>  </Route>
      <Route path="*" element={<Error404 />}>  </Route>
    </Routes>
    <Footer />

       </BrowserRouter>
    </div>
  );
}

export default App;
