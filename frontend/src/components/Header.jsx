import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <header className='header'>
            <div>
                <Link to='/'>
                    <h1>Vacances</h1>
                </Link>
            </div>
            <ul>
                {user && user.isHost ? (
                    <li>
                        <button className='btn' onClick={onLogout}>
                        Manage your accommodation
                        </button>
                    </li>
                    ) : (
                    <li>
                    <Link to='/login'>
                        <h2>Become a host</h2>
                    </Link>
                    </li>
                        
                )}  
                </ul>
            <ul>
            {user ? (
                <li>
                    <button className='btn' onClick={onLogout}>
                    <FaSignOutAlt /> Logout
                    </button>
                    
                </li>
                ) : (
                <>
                    <li>
                    <Link to='/login'>
                        <FaSignInAlt /> Login
                    </Link>
                    </li>
                    <li>
                    <Link to='/register'>
                        <FaUser /> Register
                    </Link>
                    </li>
                </>
            )}  
            </ul>
            
        </header>
    
  )
}

export default Header