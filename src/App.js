import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import AuthContextProvider from "./context/AuthProvider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Router>
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
      </Router> 
      </AuthContextProvider>
    </div>
  );
}

export default App;
