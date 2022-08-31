import React from 'react'
import { Stack } from '@mui/system'
import { categories } from '../utils/constants'


const SideBar = ({selectCategory,setSelectCategory}) => {
    
  return (
    <Stack
    direction="row"
    sx=
    {{ 
        flexDirection: { md:"column" },
        overflowY:'auto',
        height: { sx:"auto", md:"95%"},
     }} 
    >
    {
        categories.map((category)=>(
            <button 
            className='category-btn' 
            onClick={()=>setSelectCategory (category.name)}
            style={{ background:category.name===selectCategory && "#fc1503" ,color: "#fff"  }}
            key={category.name}
            >
                <span style={{marginRight:'15px' , color : category.name=== selectCategory ? "#fff" :"red"}}>{category.icon}</span>
                <span>{category.name}</span>
                
            </button>
        ))
    }

    </Stack>
  )
}

export default SideBar