import { useState } from "react";

import "./App.css";
import {
  Navbar,
  Hero,
  Facility,
  Latest,
  Feature,
  Products,
  Category,
  Testimony,
  Footer,
} from "./components/index";
function App() {
  return (
    <main>
      <div className="header">
        <Navbar />
        <Hero />
      </div>

      <Facility />
      <Latest />
      <Feature />
      <Products />
      <Category />
      <Testimony />
      <Footer />
    </main>
  );
}

export default App;
