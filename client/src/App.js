import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Posts from "./components/pages/Posts";
import Register from "./components/pages/Register";
import { AuthProvider } from "./context/auth";
import MenuBar from "./components/pages/MenuBar";
import AuthRoute from "./utils/AuthRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/register" component={Register} />
        <Route exact path="/posts" component={Posts} />
      </Router>
    </AuthProvider>
  );
}

export default App;
