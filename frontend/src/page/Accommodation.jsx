import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';


export default function Accommodation() {
    const params = useParams();
    const accommodationId = params.id;
    const [accommodation, setAccommodation] = useState(null)

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
            </>
        ) : (
            <h3>Cannot find any accommodation</h3>
        )}
    </div>
  )
}
