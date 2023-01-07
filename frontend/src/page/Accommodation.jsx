import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import axios from 'axios';

import CreateFormDialog from '../components/CreateFormDialog';
import { Button } from '@mui/material';
import './myButton.css'

export default function Accommodation() {
    const params = useParams();
    const accommodationId = params.id;
    const [open, setOpen] = useState(false);

    const [accommodation, setAccommodation] = useState(null)
    const { user } = useSelector((state) => state.auth)

    const handleCreate = (dayStart, dayEnd) => {
        const reservationData = {
            accommodationId,
            dateStart: dayStart,
            dateEnd: dayEnd,
        }
        console.log(reservationData)
        axios.post(`http://localhost:5000/api/reservations/${user._id}/reserve/${accommodationId}`, reservationData).then(res => {
            console.log('res.data',res.data);
            console.log('res',res);
            if(res.data){
                alert('Successful reservation')
                handleClose()
            }
        }).catch(res => {
            console.log('res',res);
        });

        
    }
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(params)
        let mounted = true;


        const fetchGroupAPI = (mounted) => {
            axios.get(`http://localhost:5000/api/accommodations/${accommodationId}`).then(res => {
                console.log('data:',res.data);
                if(mounted){
                    setAccommodation(res.data);
                }

            }).catch(res => console.log(res));
        }

        fetchGroupAPI(mounted);
        console.log('accommodation', accommodation)
        return () => {
            mounted = false;
        };
    }, [])
  return (
    <div>
        {accommodation ? (
            <>
                <h1>{accommodation.title}</h1>
                <h1>{accommodation.description}</h1>
                <img src={accommodation.imageUrlList[0]} alt="" />
                <div></div>
                <Button class="button-29" onClick={handleOpen}>Reservation</Button>
                <CreateFormDialog open={open} handleCreate={handleCreate}/>
            </>
        ) : (
            <h3>Cannot find any accommodation</h3>
        )}
    </div>
  )
}
