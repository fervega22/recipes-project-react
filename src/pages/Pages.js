import React from 'react'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { DetailsRecipes } from './DetailsRecipes'
import { DairyFree } from './DairyFree'
import { Vegan } from './Vegan'
import { GlutenFree } from './GlutenFree'
import { Home } from './Home'
import { ErrorView } from '../components/ErrorView'

export const Pages = () => {
  return (
      <HashRouter basename="/"> 
        <Navbar />       
        <Routes>            
            <Route path='/' exact element={<Home />} />
            <Route path='recipe/:id' element={<DetailsRecipes />} />
            <Route path='gluten' element={<GlutenFree />} />
            <Route path='dairy' element={<DairyFree />} />
            <Route path='vegan' element={<Vegan />} />
            <Route path='error' element={<ErrorView />} />
         </Routes>
      </HashRouter>
  )
}
