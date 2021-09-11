import React from 'react'
import  styled  from 'styled-components'
import {base_url} from '../urls'

const TrendingMovie = ({poster_path}) => {
    return (
      <Wrapper>
            <img src={`${base_url}${poster_path}`} alt="img" />
      </Wrapper>
    )
}

export default TrendingMovie
const Wrapper = styled.div`
img{
    max-width: 400px;
     height: 400px;
     object-fit: cover;
     padding:10px ;
     cursor: pointer;
     transition: 450ms;
 }
 img:hover{
     transform: scale(1.08);
 }


`
