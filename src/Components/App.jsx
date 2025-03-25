
import React from 'react'
import Header from './Header'
import Content from './Content'
import MovieSessions from './MovieSessions'
import SeatSelection from './SeatSelection'
import Finished from './Finished'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Content />}/>
        <Route path='/sessoes/:idMovie' element={<MovieSessions />} />
        <Route path='/assentos' element={<SeatSelection />} />
        <Route path='/sucesso' element={<Finished />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


