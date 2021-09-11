import React,{useState,useEffect} from 'react'
import { ApiEndpoints,base_url } from "../urls";
import styled from 'styled-components';



const{fetchActionMovies} = ApiEndpoints
const ActionMovies = () => {
    const[movies,setMovies] = useState([])
    const fetchMovies = async(url)=>{
        try {
            const resp = await fetch(url)
            const data = await resp.json()
            setMovies(data.results)
            console.log(movies);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMovies(fetchActionMovies)
    }, [])

    return (
        <Wrapper>
        <h1>Action Movies</h1>
            <div className="img-container">
            {movies.map((movie)=>{
                const{id,backdrop_path} = movie
                return <div className="image-wrapper" key={id}>
                <img src={`${base_url}${backdrop_path}`} alt="" />
                </div>
            })}
            </div>
        </Wrapper>
    )
}

export default ActionMovies


const Wrapper = styled.div`

.img-container{
display: flex;
gap: 10px;
overflow-y: hidden;
overflow-x: scroll;
}
    .image-wrapper{
    margin-top: 10px;
    padding: 10px;
        img{
            width: 500px;
            height: 300px;
            object-fit: cover;
            
            cursor: pointer;
            transition: 450ms;
        }
        img:hover{
            transform: scale(1.08);
        }
    }
    .img-container::-webkit-scrollbar {
  display: none;
}
.img-container {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


@media(max-width:450px){
   .img-container{
       .image-wrapper{
           img{
               width: 400px;
           }
       }
   }
}






`