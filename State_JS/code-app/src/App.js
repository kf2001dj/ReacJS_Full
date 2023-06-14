import React from "react";
import Profile from "./components/Profile"
import { ReactDOM } from "react";


function App() {
  return (
    <div className="App">
      <Profile></Profile>
    </div>
  );
  ReactDOM.render(
    <Profile 
        logo_url="https://books.agiliq.com/projects/django-design-patterns/en/latest/_static/logo.png"
        title="Mobile App, Web App and API Development and More"/>,
    document.getElementById("main")
  );

}

export default App;
