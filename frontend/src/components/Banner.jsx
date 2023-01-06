import { useState } from 'react'
import './Banner.css'
import {Button} from '@mui/material';
import Search from './SearchByLocation';
//import { useHistory } from "react-router-dom";

function Banner() {
    //const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
        </div>
    )
}

export default Banner
