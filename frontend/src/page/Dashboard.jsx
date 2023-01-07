import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
// import { getAccommodations, reset } from '../features/accommodations/accommodationSlice'
import { getAccommodations } from '../features/accommodations/accommodationService'
import './Dashboard.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import {Link} from 'react-router-dom'


function Dashboard() {
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  // const {accommodation, isLoading, isError, message } = useSelector(
  //   (state) => state.accommodation
  // )
  // console.log('accommodation')
  const init = []
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(init);
  
  const reload = (e) => {
    setOpen(!open)
  }

  const onLinkClick = (e) => {
    console.log('click link', e)
  }

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }
    let mounted = true;
    
    const fetchGroupAPI = () => {
        axios.get("http://localhost:5000/api/accommodations").then(res => {
          console.log('res.data',res.data);
          if(mounted) setList(res.data);
        }).catch(res => {
            console.log('res',res);
        });
    };
    
    fetchGroupAPI();
    
    return () => {
        mounted = false;
    };
  },[open, user]);

  return (
    <>

      <section className='heading'>
        <h1>Welcome {user && user.name} to Vacances</h1>
      </section>  
      <div className='home'>
            <Banner />

            {list.length > 0 ? (
              <div className='home__section'>
                {list.map((item) => (
                  <Link class='item' onClick={onLinkClick} to={`/accommodation/${item._id}`}>
                    <Card src={item.imageUrlList[0]} title={item.title} description={item.description} price={item.pricePerNight} />
                  </Link>
                ))}
              </div>
            ) : (
              <h3>Cannot find any accommodation</h3>
            )}
            
      </div>
    </>
    
  )
}

export default Dashboard

