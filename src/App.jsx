import React from "react"
import './App.css'
import Navbar from "./Components/NavBar/Navbar"
import Banner from "./Components/Banner/Banner"
import RowPost from "./Components/RowPost/RowPost"
import { orginals,comedy,actions,trending,horror } from "./urls"


function App() {
  

  return (
   <div>
    <Navbar/>
    <Banner/>
    <RowPost className='poster' title='Netflix orginals' url={horror} />
    <RowPost className='small-poster' title='Trending' url={trending}/>
    <RowPost className='small-poster' title='Actions' url={actions}/>
    <RowPost className='small-poster' title='comedy' url={comedy}/>
    <RowPost className='small-poster' title='Originals' url={orginals}/>
   </div>
  )
}

export default App
