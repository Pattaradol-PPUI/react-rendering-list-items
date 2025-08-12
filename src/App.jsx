import "./App.css";
import "tailwindcss";
import { MoviesList } from "./components/itemList";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {<MoviesList />}
      </section>
    </div>
  );
}

export default App;
