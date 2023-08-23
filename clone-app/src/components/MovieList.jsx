import React from 'react';
import '../assets/Styles/MovieList.css'
import { Movies } from '../MovieData';


function MovieList() {
  return (
    <div className='expanded-div'>
     
      

      <div> {Movies.map((Movie) => ( 
        
              <div className="float-child " key={Movie.id}> 
                    <img src={Movie.image} alt='Movie image' />
                     <h3>{Movie.name}</h3> 
                        
  

                  
               </div> )
               )} 
    </div>


    </div>
  )
}

export default MovieList