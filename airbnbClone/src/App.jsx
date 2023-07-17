import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
