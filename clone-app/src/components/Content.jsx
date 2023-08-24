import React from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'
import Wonder from './wonder'

export default function Content() {
  return (
    <div className='w-auto h-auto%'>
        <Navbar/>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <Wonder/>
        <MovieList/>

    </div>
  )
}
