import {useEffect} from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import './Dashboard.css'
import Banner from '../components/Banner'
import Card from '../components/Card'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const {accommodation, isLoading, isError, message } = useSelector(
    (state) => state.accommodation
  )

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>  
      <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            </div>
            
      </div>
    </>
    
  )
}

export default Dashboard

