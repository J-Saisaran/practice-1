import React, { useState } from 'react'
import "./App.css";
import { Welcome1 } from './Welcome1';
import { Addcolor } from './Addcolor';
import { Counter } from './Counter';
import { Routes, Route ,Link} from 'react-router-dom';


const Initial_Movie_name=[
  {
    poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
    name:"Dark",
    Summary:"The German science fiction thriller series  takes place in the enigmatic little town of Winden. The narrative starts in 2019 with the disappearance of a young boy named Erik Obendorf. This sets off a series of events that reveal the town's dark secrets and interwoven lives across several generations.",
    trailer:"https://youtu.be/rrwycJ08PSA",
    rating: 4.6 
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 3.5
  },
  {
    poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
    name:"Dark",
    Summary:"The German science fiction thriller series  takes place in the enigmatic little town of Winden. The narrative starts in 2019 with the disappearance of a young boy named Erik Obendorf. This sets off a series of events that reveal the town's dark secrets and interwoven lives across several generations.",
    trailer:"https://youtu.be/rrwycJ08PSA",
    rating: 4.9
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 4
  },
  {
    poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
    name:"Dark",
    Summary:"The German science fiction thriller series  takes place in the enigmatic little town of Winden. The narrative starts in 2019 with the disappearance of a young boy named Erik Obendorf. This sets off a series of events that reveal the town's dark secrets and interwoven lives across several generations.",
    trailer:"https://youtu.be/rrwycJ08PSA",
    rating: 4.6 
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 3.5
  },
  {
    poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
    name:"Dark",
    Summary:"The German science fiction thriller series  takes place in the enigmatic little town of Winden. The narrative starts in 2019 with the disappearance of a young boy named Erik Obendorf. This sets off a series of events that reveal the town's dark secrets and interwoven lives across several generations.",
    trailer:"https://youtu.be/rrwycJ08PSA",
    rating: 4.9
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 3
  },
  {
    poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
    name:"Dark",
    Summary:"The German science fiction thriller series  takes place in the enigmatic little town of Winden. The narrative starts in 2019 with the disappearance of a young boy named Erik Obendorf. This sets off a series of events that reveal the town's dark secrets and interwoven lives across several generations.",
    trailer:"https://youtu.be/rrwycJ08PSA",
    rating: 4.6 
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 3.5
  },
  {
    poster:"https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg",
    name:"Dark",
    Summary:"The German science fiction thriller series  takes place in the enigmatic little town of Winden. The narrative starts in 2019 with the disappearance of a young boy named Erik Obendorf. This sets off a series of events that reveal the town's dark secrets and interwoven lives across several generations.",
    trailer:"https://youtu.be/rrwycJ08PSA",
    rating: 4.9
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 5
  },
  {
    poster:"https://c4.wallpaperflare.com/wallpaper/449/429/294/stranger-things-netflix-poster-wallpaper-preview.jpg",
    name:"Stranger things ",
    Summary:"Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects.",
    trailer:"https://youtu.be/b9EkMc79ZSU",
    rating: 4
  }
]

const App = () => {
  
  return (
        <div className='App'>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/movies">Movielist</Link></li>
              <li><Link to="/add-color">Addcolor</Link></li>
            </ul>
          </nav>

<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/movies" element={<Movielist/>}/>
  <Route path="/add-color" element={<Addcolor/>}/>

</Routes>
  
    </div>
  )
}

function Home(){

  return(
    <h1>Netflix app</h1>
  )
}

function Movielist(){
  const MovieList = Initial_Movie_name
return(
<div className='movie-list'> 
       {MovieList.map((mv)=>(
        <Movie movie={mv}/>
))}
       </div>


)

}

function Movie({movie}){
  const[show,setShow]=useState(true)
const ratingStyles={
 color: movie.rating <= 4.5? "red":"green"
}




  return(
<div className='movie-card'>
  <img className='movie-poster' src={movie.poster} alt={movie.name}/>
<div className='movie-spec'>
  <h2>{movie.name}</h2>
  <h3 style={ratingStyles}>⭐{movie.rating}</h3>
</div>
<button onClick={() => setShow(!show)}>{show? "less":"more"}</button>
{/* //<p style={summaryStyle} className='movie-summary'>{movie.Summary}</p> */}
{show? <p className='movie-summary'>{movie.Summary}</p> : ""}
<div className='movie-button'>
  <Counter/>
<button className='playbutton' > ▶️ Watch now</button>
</div>
</div>

  )
}


export default App