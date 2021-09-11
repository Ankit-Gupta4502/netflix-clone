import React,{useState,useEffect} from 'react'
import { ApiEndpoints,base_url } from "../urls";



const {fetchTopRated} = ApiEndpoints
const TopRatedMovies = () => {
    const[movies,setMovies] = useState([])
    const fetchMovies = async(url)=>{
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovies(fetchTopRated)
    }, [])

    return (
        <>
            <h1>Top Rated</h1>
            <div className='wrapper'>
            <div className="img-wrapper">
                {movies.map((movie)=>{
                    return <img src={`${base_url}${movie.poster_path}`} alt="img" key={movie.id}/>
                })}
            </div>
        </div>
        </>
       
    )
}

export default TopRatedMovies



