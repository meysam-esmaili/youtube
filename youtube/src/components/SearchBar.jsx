import React,{useState} from 'react'
import { Paper ,IconButton} from '@mui/material'
import {useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const[search,setSearch]=useState('');
  const navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search)
    {
      navigate(`/search/${search}`);
      setSearch('');
    }
  }

  
  return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    sx={{ 
        borderRadius:15,
        border:'1px solid #e3e3e3',
        pl:3,
        boxShadow:'none',
        mr:{sm:5}//margin right for small devices
     }}
    >

       <input className='search-bar' placeholder='search...'
       value={search}
       style={{ border:'white',outlineWidth:0 }}
       onChange={(e)=>{setSearch(e.target.value)}}
       />

       <IconButton size="large" type="submit" sx={{ color:'red', p:'10px' }}>
           <Search/>
       </IconButton>

    </Paper>
  )
}

export default SearchBar