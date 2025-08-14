import "./App.css";
import { Movielist } from "./component/Movie";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Directions } from "./component/director";


function App() {
  return (
    <div className="App" css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}>
      <p css={css`
          font-size: 50px;
          
        `}>Movie List Section</p>
      <section className="movie-list-section"
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        `}
      >
        {/* Render Movie Lists Here */}
      <Movielist/>
      </section>
      <section>
        <p css={css`
          font-size: 50px;
        `}>Team List Section</p>
        <Directions/>

      </section>


        
    </div>
  );
}

export default App;
