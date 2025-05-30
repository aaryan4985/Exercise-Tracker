import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <router>
      <Navbar />
      <br />
      <route path="/" exact component={ExercisesList} />
      <route path="/edit/:id" component={EditExercise} />
      <route path="/create" component={CreateExercise} />
      <route path="/user" component={CreateUser} />
    </router>
  );
}

export default App;
