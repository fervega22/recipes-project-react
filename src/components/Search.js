import { Box, FormControl, Input, InputAdornment, InputLabel } from '@mui/material'
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({setSearch}) => {

  const [inputValue, setInputValue] = useState(''); //input to search

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
      handleSubmit();
  }

  const handleSubmit = () => {
    if(inputValue.trim().length > 2 ){
      setSearch(inputValue);       
    }
  }
 

  return (
    <div className='search-input'  >
        <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
        >
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Search recipes</InputLabel>
              <Input
                id="standard-adornment-amount"
                value={ inputValue }
                onChange={ handleInputChange }
                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                />
            </FormControl>
        </Box>
         
    </div>
    
  )
}

export default React.memo(Search)