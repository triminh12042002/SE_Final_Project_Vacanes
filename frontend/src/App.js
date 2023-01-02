import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import Register from './page/Register'

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
                </Routes>
            </div>
        </Router>
        </>
    )
}

export default App