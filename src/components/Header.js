import movie from '../assests/movie-time.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="flex justify-between text-center border border-solid border-black m-2 
        w-100% h-[150px] overflow-hidden">
            <Link to='/'>
            <img src={movie} className='lg:w-[150px] w-[100px] rounded-lg'/>
            </Link>

            <ul>
                <li> <Link to="/cont"> Contact </Link> </li>
                {/* <li> <a href='localhost:3000/cont/' target='blank'> Contact</a> </li> */}
                <li>WishList💗</li>
                <li>Profile</li>
            </ul>

        </nav>
    )
}

export default Header;