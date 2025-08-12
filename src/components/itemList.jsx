import movies from "../data/movies"
export function MoviesList(){
  return (
    <>
    <div className="flex justify-center flex-col bg-amber-50">
      <div className="flex flex-row justify-center p-[20px]">
        <h1 className="header ">Movie List Section</h1>
      </div>
      {movies.map((item) => {
        return <div className="flex justify-center ">
          <div className="flex flex-column justify-items-center w-[400px]; h-[250px] mt-10 bg-gray-100 shadow-xl shadow-gray-300 rounded-b-xl" 
        >
         <img 
         src= {item.image}
         alt=""
         className="w-[102px] h-[100px] object-cover rounded-md ml-3 mt-18"
       />
       <div className="flex flex-col w-[231px] h-[211px] gap-[10px] m-[21px]">
          <p>Title: {item.title} </p>
          <p>Year: {item.year}</p>
          <p>Runtime: {item.runtime}</p>
          <p>Genres: {item.genres.join(", ")}</p>
          <p>IMDB Ratings: {item.imdbRating} </p>
          <p>IMDB Votes: {item.imdbVotes}</p>
        </div>
            </div>
       </div>  
      })}
    </div>
    </>
  )
}