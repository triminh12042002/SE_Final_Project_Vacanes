import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Switch} from 'react-router'
import Header from './components/Header'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import Register from './page/Register'
import Accommodation from './page/Accommodation'

function App(){
    return (
        <>
        <Router>
            <div className='container'>
              <Header />
                <Routes>
                    <Route path='/' element={<Dashboard/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/accommodation/:id' element={<Accommodation/>} />
                </Routes>
            </div>
        </Router>
        </>
    )
}

export default App