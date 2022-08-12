import React, { useState, useEffect } from 'react'
import { ApiEndpoints, base_url } from "../urls";


const { fetchComedyMovies } = ApiEndpoints
const ComedyMovies = () => {
    const [movies, setMovies] = useState([])
    const fetchMovies = async (url) => {
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies(fetchComedyMovies)
    }, [])
    return (
        <>
            <h1>Comedy Movies</h1>
            <div className='wrapper' style={{paddingBottom:'30px'}} >
                {movies.map((movie) => {
                    return <div className="img-wrapper" key={movie.id}>
                        <img src={`${base_url}${movie.poster_path}`} alt="img"  />
                    </div>
                })}
            </div>
        </>
    )
}

export default ComedyMovies
