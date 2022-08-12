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
            
                {movies.map((movie)=>{
                    return <div className="img-wrapper" key={movie.id}>
                    <img src={`${base_url}${movie.poster_path}`} alt="img" />
                    </div>
                })}
            
        </div>
        </>
       
    )
}

export default TopRatedMovies



