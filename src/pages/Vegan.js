import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ErrorView } from '../components/ErrorView';
import  Search  from '../components/Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CardItem } from '../components/CardItem';
import { types } from '../types/types';
import { getRecipesBySearch } from '../helpers/getRecipes';

export const Vegan = () => {
   
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(24);
  const [hasMore, sethasMore] = useState(true); 
  const [items, setItems] = useState([]);
  
  let diet = types.Vegan; 

  useEffect(() => {
      setTimeout(() => {
          setOffset(24);
          sethasMore(true);
          getRecipesBySearch(search, '', diet)
              .then( res => {
                  setItems(res?.results);
                  if (res?.results.length === 0 || res?.results.length < 24) {
                      sethasMore(false);
                  }
              });                
      }, 300);  
  }, [search]);  

  const getData = () => {    
      setTimeout(() => {
        getRecipesBySearch(search, '', diet, offset)
            .then( res => {
                setItems([...items, ...res?.results]);
                if (res?.results.length === 0 || res?.results.length < 24) {
                    sethasMore(false);
                }
            });
      }, 300);
      setOffset(offset + 24);
  }

  return (
    (!items?.error) ? 
    <div className='container-general'  id="scrollableDiv" style={{ height: '90%' }}>
      <Search setSearch={setSearch} />  
      <Divider />   
      <Typography variant='h4' className='text-title-filter'>Vegan</Typography>
      <div className='container-grid'>
      <InfiniteScroll 
          dataLength={items?.length}
          next={getData}
          hasMore={hasMore}
          loader={<Typography variant="h4" className='text-no-results'>Loading...</Typography>}
          scrollableTarget="scrollableDiv"
          >     
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 12, sm: 8, md: 12 }}>
          { 
              items?.map( r => (
                  <CardItem 
                      key= {r.id}
                      { ...r }
                  />
              ))
          }
          </Grid>
      </InfiniteScroll>
      </div>       
    </div> 
  : <ErrorView />
  )
}