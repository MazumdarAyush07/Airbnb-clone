import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    console.log("card", item);
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="flex flex-nowrap gap-5 overflow-x-auto md:flex-row flex-col ml-11 md:mb-20 mb-3">
        {cards}
      </section>
    </div>
  );
}

export default App;
