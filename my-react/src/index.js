import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from './pages/home/index.tsx';
import Profil from './pages/profil/profil.tsx';
import Reseau from './pages/reseau/reseau.tsx';
import { Filtres } from './pages/recherche/filtres.tsx';

export default function App(){
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/profil" element={<Profil />}/>
          <Route path="/reseau" element={<Reseau />}/>
          <Route path="/filtres" element={<Filtres />} />
        </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
reportWebVitals();

// hey