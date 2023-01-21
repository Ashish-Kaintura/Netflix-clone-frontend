import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import FrontPage from './components/FrontPage';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Private_Component from './components/Private_Component';
import Moviecard from './CardsDetails/Moviecard';
import Tvshowcard from './CardsDetails/Tvshowcard';
function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Private_Component />}>
            <Route path='/' element={<Home />} />
            <Route path='/moviecard/:id' element={<Moviecard/>} />
            <Route path='/tvshowcard/:id' element={<Tvshowcard/>} />
          </Route>
          
          <Route path='/frontpage' element={<FrontPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
