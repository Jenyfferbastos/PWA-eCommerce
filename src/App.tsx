import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Checkout } from './pages/Checkout/Checkout';
import { Handbags } from './pages/Handbags';
import { Boujee } from './pages/Handbags/Boujee';
import { Coach } from './pages/Handbags/Coach';
import { Grande } from './pages/Handbags/Grande';
import { Remus } from './pages/Handbags/Remus';
import { Home } from './pages/Home';
import { MyCarts } from './pages/MyCarts/MyCarts';

export function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Handbags' element={<Handbags />} />
        <Route path='/Handbags/Coach' element={<Coach />} />
        <Route path='/Handbags/Remus' element={<Remus />} />
        <Route path='/Handbags/Grande' element={<Grande />} />
        <Route path='/Handbags/Boujee' element={<Boujee />} />
        <Route path='/MyCarts' element={<MyCarts />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </Router>
  )
}