import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; //make routes
import Header from "./layouts/header";
import ToDoList from "./pages/todoList";
import Message from "./pages/message";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/message" />}></Route>
          <Route path="/crate-message" element={<Message />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
