// import { data } from "autoprefixer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Image } from "../constant/api";

const Moviedetails = () => {

    const location = useLocation();
    const data = location.state.data;

    console.log(data)
   
     const {poster_path,title,release_date,vote_average,vote_count,overview,original_language,popularity} = location.state.data;
    return (
        <>
        <div className="w-100% h-100% bg-amber-200">
            <div className="movdet">

                <div className=" flex border-2 h-[550px] w-[400px]
                justify-center	items-center">
                    <img src= {Image + poster_path} alt="this" className="h-[520px] w-[360px]"/>
                </div>

                <div className=" flex flex-col ml-6 text-xl font-serif tracking-wide leading-10
                w-[1100px]">

                    <p>Title : {title}</p>
                    <p>Release-date : {release_date}</p>
                    <p>Views : {vote_count}</p>
                    <p>Popularity : {popularity}</p>
                <p className="scroll-para">Overview : {overview} </p>
                    
                    
                </div>
            </div>
        </div>
        <Outlet />
        </>
    )
}


export default Moviedetails;

