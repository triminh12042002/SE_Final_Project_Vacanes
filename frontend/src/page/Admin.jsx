import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import axios from 'axios';
import Banner from '../components/Banner'
import Card from '../components/Card'
import {Link} from 'react-router-dom'
import CreateAccommodationForm from '../components/CreateAccommodationForm';
import { Button } from '@mui/material';
import CreateAccommodation from './CreateAccommodation';
import './myButton.css'

export default function Admin() {
    const params = useParams();
    const userId = params.id;
    const [open, setOpen] = useState(false);

    const [Admin, setAdmin] = useState(null)
    const [list, setList] = useState([])
    const { user } = useSelector((state) => state.auth)

    const handleCreate = (title, location, imageUrlList) => {
        const accommodationData = {
            title: title,
            location: location,
            imageUrlList: imageUrlList,
        }
        console.log(accommodationData)
        axios.post(`http://localAdmin:5000/api/admins/${user._id}`, accommodationData).then(res => {
            console.log('res.data',res.data);
            console.log('res',res);
            if(res.data){
                alert('Successful reservation')
                handleClose()
                fetchGroupAPI()
            }
        }).catch(res => {
            console.log('res',res);
            handleClose()

        });

        
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const fetchGroupAPI = (mounted) => {
        axios.get(`http://localAdmin:5000/api/admins/${userId}`).then(res => {
            console.log('res.data',res.data);
            if(mounted) setList(res.data);
            }).catch(res => {
                console.log('res',res);
        });
        
    }
    useEffect(() => {
        console.log(params)
        let mounted = true;


        

        fetchGroupAPI(mounted);
        // console.log('List', list)
        return () => {
            mounted = false;
        };
    }, [])
  return (
    <div>
        <Button class="button-29" onClick={handleOpen}>Create new accommodation</Button>
        <CreateAccommodationForm open={open} handleCreate={handleCreate}/>
        {list.length > 0 ? (
              <div className=''>
                {list.map((item) => (
                  <Link class='item' to={`/accommodation/${item._id}`}>
                    <Card src={item.imageUrlList[0]} title={item.title} description={item.description} price={item.pricePerNight} />
                  </Link>
                ))}
              </div>
            ) : (
              <h3>Cannot find any host</h3>
            )}
    </div>
  )
}
