import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Switch} from 'react-router'
import Header from './components/Header'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import Register from './page/Register'
import CreateAccommodation from './page/CreateAccommodation'
import Accommodation from './page/Accommodation'
import Host from './page/Host'

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
                    <Route path='/accommodation' element={<Accommodation/>} />
                    <Route path='/accommodation/:id' element={<Accommodation/>} />
                    <Route path='/host' element={<Host/>} />
                    <Route path='/host/:id' element={<Host/>} />
                </Routes>
            </div>
        </Router>
        </>
    )
}

export default App