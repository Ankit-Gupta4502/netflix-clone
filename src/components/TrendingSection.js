import React, { useState ,useEffect} from 'react'
import { ApiEndpoints } from "../urls";
import styled from 'styled-components';
import TrendingMovie from './TrendingMovie';

const TrendingSection = ({setLoading}) => {
    const[movies,setMovies] = useState([])

    const{fetchTrending} = ApiEndpoints
    const fetchMovies= async (url)=>{
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies(fetchTrending)
    },[fetchTrending])

    return (
        <Wrapper>
        <h1>Trending</h1>
        <div className="container">
            {movies.map((movie)=>{
                return <TrendingMovie {...movie} key={movie.id}/>
            })}
            </div>
        </Wrapper>
    )
}

export default TrendingSection

const Wrapper = styled.div`
margin-top: 20px;

.container{
    margin-top: 10px;
    display: flex;
    gap: 10px;
    overflow-y: hidden;
    padding: 10px;
}
.container::-webkit-scrollbar {
  display: none;
}
.container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

@media(max-width:768px){
    h1{
        font-size: 1.5rem;
    }
}

`