import { Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ErrorView } from '../components/ErrorView';
import  Search  from '../components/Search';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CardItem } from '../components/CardItem';
import { getRecipesBySearch } from '../helpers/getRecipes';

export const Home = () => {

    const [search, setSearch] = useState(''); //to search recipes
    const [offset, setOffset] = useState(24); //to get more data - Infinite scroll
    const [hasMore, sethasMore] = useState(true); //indicator of data length - Infinite scroll
    const [items, setItems] = useState([]); //recipes to show
    const [loading, setLoading] = useState(true); //to search recipes
    
    useEffect(() => {
        setTimeout(() => {
            setOffset(24);
            sethasMore(true);
            //To load data
            getRecipesBySearch(search)
                .then( res => {           
                    //set data        
                    setItems(res?.results); 
                    //stop loading - infinite scroll                   
                    if (res?.results.length === 0 || res?.results.length < 24) {
                        sethasMore(false);
                    }
                    setLoading(false);
                });                 
        }, 300);    
    }, [search]);  

    //To show more data - infinite scroll 
    const getNextData = () => {      
        setTimeout(() => {
            setOffset(offset + 24);
            getRecipesBySearch(search, '', '', offset)
                .then( res => {                   
                    setItems([...items, ...res?.results]);
                    if (res?.results.length === 0 || res?.results.length < 24) {
                        sethasMore(false);
                    }
                });
        }, 300);
    }

    return (
      (!items?.error) ? 
      <div className='container-general'  id="scrollableDiv" style={{ height: '90%' }}>
        <Search setSearch={setSearch} />  
        <Divider />   
        <div className='container-grid'>
        
        <InfiniteScroll 
            dataLength={items?.length}
            next={getNextData}
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
        {          
          (items?.length === 0 && !loading) &&
            <Typography variant="h4" className='text-no-results'>
                No results found
            </Typography>            
        }
        </div>       
      </div> 
    : <ErrorView />
    )
}
