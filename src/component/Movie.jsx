/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";

export  function Movielist(){
    return(
    <ul
    css={css`
        display: flex;
        flex-direction: column;
        gap: 30px; 
        list-style: none;
        padding: 0;
      `}>
        {movies.map((item) =>{
        return (
        <li key={item.title}
        css={css`
            display: flex;
            justify-content: center;
        `}>
            <div  css={css`
                    width: 400px;
                    height: 250px;
                    display: flex;
                    flex-direction: row;
                    background-color: white;
                    color: black;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(249, 249, 249, 1); 
                    padding: 20px;
                    gap:40px;
                `}>
                <img src={item.image} alt="photo" 
                css={css` 
                    width: 100px;
                    height: 100px;
                    border-radius: 16px;
                    object-fit: cover
                    `}/>
                <div css={css`
                        display: flex;
                        flex-direction: column;
                        font-size:20px;
                        font-weight: bold;
                    `}>
                    title: {item.title } <br/>
                    year: {item.year} <br/>
                    runtime: {item.runtime}<br/>
                    director: {item.director}<br/>
                    <div>
                      Genres:{" "}
                      {item.genres.map((genre) => (
                        <span key={genre}  css={css`
                                display: inline-block;
                                background: #e6a89d;
                                color: #fff;
                                padding: 4px 12px;
                                margin-right: 8px;
                                border-radius: 16px; 
                                font-size: 0.95em;
                                font-weight: 500;
                            `}>{genre}</span>
                      ))}
                    </div>
                    imdbRating: {item.imdbRating}<br/>
                    imdbVotes: {item.imdbVotes}<br/>
                </div>
            </div>
        </li>  
        )})}
    </ul>
    )
}