import './App.css';
import { CTA, Brand, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
