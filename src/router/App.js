import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from "../pages/User";
import Signin from "../pages/Signin";
import Home from "../pages/Home"

function App() {
  return (
    <div className="App">
     
  <BrowserRouter>
    <Routes>
      <Route path="/user" element={<User />}>  </Route>
      <Route path="/signin" element={<Signin />}>  </Route>
      <Route path="/Home" element={<Home />}>  </Route>
    </Routes>

       </BrowserRouter>
    </div>
  );
}

export default App;
