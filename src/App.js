import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Profile from './pages/profile';
import Lens from './pages/lens';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function App () {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => { 
  setIsOpen(!isOpen);
};

useEffect(()=>{
  const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen){
      setIsOpen(false)
    }
  }
  window.addEventListener('resize', hideMenu)
  return() => {
    window.removeEventListener('resize', hideMenu)
  }
})

return (
  <>
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/lens' component={Lens} />
       <Route path='/profile' component={Profile} />
    </Switch>
    <Footer />
  </>
  );
}

export default App;
