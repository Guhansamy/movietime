import { Image } from "../constant/api";
const Moviecard= (props) => {

    const {title,poster_path,popularity,release_date} = props.movie_data;

    return (
        <div>
            <div className="movie-pack">

                <div className="movie-img">
                    <img src={Image+poster_path} />
                </div>

                <div className="flex flex-col overflow-hidden">
                    { title}
                </div>
                <div>
                    Release : {release_date}  
                </div>
                <div>
                    Popularity : {popularity}
                </div>

            </div>
        </div>
    )
}

export default Moviecard;