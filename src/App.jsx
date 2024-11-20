import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import HeroPage from './pages/HeroPage'
import LogIn from './pages/LogIn'
import LevelPage from './pages/levels/LevelPage'
import ChapterPage from './pages/ChapterPage'
import ReadPage from './pages/levels/ReadPage'
import LeaderBoards from './pages/LeaderBoards'
import Register from './pages/Register'
import ProfilePage from './pages/ProfilePage'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HeroPage/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/register' element={<Register/>} />

        <Route path='/chapters' element={<ChapterPage/>} />
        <Route path='/readpage' element={<ReadPage/>} />
        <Route path='/levelpage' element={<LevelPage/>} />
        <Route path='/leaderboard' element={<LeaderBoards/>} />
        <Route path='/profile' element={<ProfilePage/>} />

      </Routes>

    </Router>
     
    </>
  )
}

export default App
