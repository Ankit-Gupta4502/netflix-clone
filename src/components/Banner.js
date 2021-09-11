import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ApiEndpoints, base_url } from "../urls";

const { fetchPopular} = ApiEndpoints;
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchRated = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setMovies(data.results[index]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRated(fetchPopular);
    setIndex(()=>{
        return Math.floor(Math.random()*20)
    })
  }, [index]);
  return (
    <Wrapper>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition:"center"
        }}
      >
        <div className="banner-contents">
        <div className="btn-conatiner">
            <button type='button'>Play</button>
        </div>
          <div className="banner-info">
            <h2>{movies.original_title||movies.title}</h2>
            <p>{(movies.overview)}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.div`
  .banner {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 85vh;
    justify-content: center;

    .banner-contents {
      max-width: 1170px;
      display: flex;
      flex-direction: column;
      padding: 0px 50px;
    }
    button {
      padding: 5px 35px;
      outline: none;
      background: rgba(0, 0, 0, 0.3);
      color: #ffffff;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.5rem;
    }
    button:hover {
      background: gray;
    }
    .banner-info {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h2 {
        font-size: 2rem;
        font-weight: bolder;
        color: red;
      }
      p {
        letter-spacing: 0.2rem;
        font-size: 1rem;

      }
    }
  }
`;
