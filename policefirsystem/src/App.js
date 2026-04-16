import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './componunts/Home'
import Contact from './componunts/Contact'
import Fir from './componunts/Fir'
import Support from './componunts/Support'
import NotFound from './componunts/NotFound'
import Header from './componunts/Header'
import Login from './componunts/Login'
import Addfir from './componunts/Addfir'
import {Select} from './componunts/Select'
import { Removefir } from './componunts/Removefir'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fir" element={<Fir />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addfir" element={<Addfir />} />
        <Route path="/Select/:username/:userid" element={<Select />} />
        <Route path="/removefir" element={<Removefir />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App