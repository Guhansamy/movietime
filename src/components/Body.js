import { useEffect, useState } from "react";
import Moviecard from "./moviecard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [movieList, setMovieList] = useState([]);
    const[searchText,setSearchText] = useState("");
    const[searchMovies,setSearchMovies] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=7fb3ae1412ed593871b3bfc046ddb759");
            const data = await response.json();
            setMovieList(data.results);
            setSearchMovies(data.results);
            
                // fetch('https://dummyjson.com/products/1')
                // .then(res => res.json())
                // .then(json => console.log(json))
            
            } 
        catch (error) {
            console.error("Error fetching data:", error);
                     }
    }

    function handleEvent (tt) {
        setSearchText(tt.target.value);
    }
    console.log(movieList);

//function for the filtering the data and also to set it to the searchMovies
    function filterMovies () {
        const filterData = movieList.filter(movie => {

            return (
                movie.title.toLowerCase().includes(searchText.toLowerCase())
            )
        });
        setSearchMovies(filterData);
    }

//for top rated movies
    function topMovies () {
        const topRatedMovies = movieList.filter(movie => {
            return movie.vote_average > 8.0;
        })
        setSearchMovies(topRatedMovies);
    }

  


    return (
        <>
        <div className="serach-box">    
            <input type="text" placeholder="  Search" className="border border-solid border-black w-[250px] ml-2" onChange={handleEvent}/>
            <button onClick={filterMovies} className="border border-black ml-3 w-20 c" > Search</button>
            <button onClick={topMovies} className="border border-black ml-3 w-40" > TopRatedMovies </button>
        </div>

        {
            searchMovies.length == 0 ? <Shimmer /> :
            (<div className="movie-cards">
               
                {
                    searchMovies.map((movie) => (
                    
                        // <Link to={{ pathname: `/movie/${movie.id}`, state:{data : movie}}} >
                        < Link to={'/movie/'+movie.id} state={{data : movie}}>
                        <Moviecard key = {movie.id}
                        movie_data = {movie} />
                        </Link>
                    ))
                }
            </div>)
            }
        </>
    )
}

export default Body;



/*const url = 'https://amazon-data6.p.rapidapi.com/product-details';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '9fc047fecamshb1c5c73756c1ab2p16409ajsn6b2f3d6848cf',
		'X-RapidAPI-Host': 'amazon-data6.p.rapidapi.com'
	},
	body: {
		asin: 'B086PKMZ1Q',
		marketplace_domain: 'www.amazon.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/