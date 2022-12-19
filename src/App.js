import React, { useState } from "react";
import {
  BrowserRouter as 
  Route,
  Link,
  Routes,
} from "react-router-dom";
import "./App.css";
import ChangePass from "./components/ChangePass";
import ForgotPass from "./components/ForgotPass";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";

export const AppContext = React.createContext();

function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      <Routes>
          <AppContext.Provider value={[log, setLog]}>
            <Route path="/protected" component={Protected} />
            <Route path="/login" component={Login} />
            <Route exact path="/forgotpassword" component={ForgotPass} />
            <Route exact path="/register" component={Register} />
            <Route path="/resetpassword/:id/:token" component={ChangePass} />
            <Route exact path="/" />
              <Link to="/login" />
  
          </AppContext.Provider>
      </Routes>
    </div>
  );
}

export default App;