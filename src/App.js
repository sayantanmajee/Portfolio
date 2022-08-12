import React from "react";
import { About, Footer, Header, Contact, Work } from './container'
import { Navbar, NavigationDots, SocialMedia } from './components'
import './App.scss'


function App() {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <NavigationDots/>
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;