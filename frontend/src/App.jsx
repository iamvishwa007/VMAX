import React, { useEffect, useState } from 'react'
import './App.css'
import NavBar from './Components/NavComponents/NavBar.jsx'

import useTheme from './Hooks/useTheme.jsx'
import Header from './Components/HeaderComponets/Header.jsx';
import Trending from './Components/TrendingComponents/Trending.jsx';



const TMDB_API_KEY="68f498694b28bedb71dc926f68bd68da";
const App = () => {
  const[theme,setTheme]=useTheme();
  const[trending,setTrending]=useState([]);
  const[searchTerm,setSearchTerm]=useState("");
  const[mainMovies,setMainMovies]=useState([]);
  const[selectedMovie,setSelectedMovie]=useState(null);
  const[loading,setLoading]=useState(false);
  const[searching,setSearching]=useState(false);

 useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
  .then(res=>res.json())
  .then(data=>{
    setTrending(data.results?data.results.slice(0,10):[]);
    console.log(data.results.slice(0,10));

  })
  .catch(e=>console.log("Error in fetching trending movies"))
 },[])

//  useEffect(()=>{
//   setLoading(true)
//   if(!searchTerm.trim()){
//     fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${TMDB_API_KEY}`)
//     .then(res=>res.json())
//     .then(data=> setMainMovies(data.results || []))
//     .catch(e=>console.log("error in searching movies"))
//     .finally(()=>{setLoading(false);setSearching(false)})
//   }else{
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(searchTerm)}`)
//     .then(res=>res.json())
//     .then(data=>setMainMovies(data.results || []))
//     .catch(e=>console.log("error in searching movies"))
//     .finally(()=>{setLoading(false);setSearching(false)})
//   }
//  },[searchTerm])

 const handleSearch=(e)=>{
  e.preventDefault();
  console.log(searchTerm)
  setSearchTerm(searchTerm.trim());
 };

 const clearSearch=()=>{
  setSearchTerm("");
  setSearching(false);
 };

  return(
    <div className={`app ${theme}`}>
     <NavBar
     theme={theme}
     setTheme={setTheme}
     searchTerm={searchTerm}
     setSearchTerm={setSearchTerm}
     handleSearch={handleSearch}
     searching={searching}
     clearSearch={clearSearch}
     />

     <Header theme={theme}/>
     <Trending
     theme={theme}
     trending={trending}
     setSelectedMovie={setSelectedMovie}
     />
     {/* <Explore/>
     {selectedMovie && (
     <MovieModal/>
     )
     }
     <Footer/> */}
    </div>
  )
}

export default App
