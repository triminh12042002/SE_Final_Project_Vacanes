import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div>
            <Link to='/'>GoalSettter</Link>
        </div>
        <ul>
            <li>
                <Link to='Login'>
                    <FaSignOutAlt /> Login
                </Link>
            </li>
            <li>
                <Link to='Register'>
                    <FaUser /> Register
                </Link>
            </li>
        </ul>
    </header>
    
  )
}

export default Header