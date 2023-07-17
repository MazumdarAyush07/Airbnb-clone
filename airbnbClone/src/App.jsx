import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;
