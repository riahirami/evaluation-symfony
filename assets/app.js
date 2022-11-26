import "./styles/app.css";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
// start the Stimulus application
import "./bootstrap";
// import Home from './home'
// import Users from './users'
import "./bootstrap";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" >
                  Symfony/React
                </a>
              </div>
              <ul class="nav navbar-nav">
                <li class="">
                <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                <NavLink to="/users">users</NavLink>
                </li>
               
              </ul>
            </div>
          </nav>


          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

ReactDOM.render(<App />, document.getElementById("root"));
