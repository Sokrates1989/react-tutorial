import React from "react";
import Note from "./components/Note";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="Property based Header"/>
      <Note 
        title="Property Given Title" 
        content="Property based content" 
      />
      <Footer />
    </>
  );
}

export default App;
