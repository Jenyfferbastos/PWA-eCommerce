import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Handbags } from './pages/Handbags';
import { Home } from './pages/Home';

export function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Handbags' element={<Handbags />} />
      </Routes>
    </Router>
  )
}