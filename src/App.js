import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

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
