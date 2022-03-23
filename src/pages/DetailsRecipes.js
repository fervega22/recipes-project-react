import { Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ErrorView } from '../components/ErrorView';
import { useFetchInfoRecipes } from '../hooks/useFetchRecipes';

export const DetailsRecipes = () => {

    //get recipe id 
    const { id } = useParams();

    //To get data from id
    const {results} = useFetchInfoRecipes(id);
    
    //Save extended ingredients
    const ingredients = results?.extendedIngredients;

    //format html to show in screen
    function createMarkupInstructions() {
        return {__html: (results?.instructions) || 'COMING SOON...' };
    }   
    //format html to show in screen
    function createMarkupIngredients() {
        if(ingredients){
            let listIngredientsHtml = "<ul>"
            ingredients.map( (ingrediente) =>{
                listIngredientsHtml = listIngredientsHtml + `<li key=${ingrediente.id}>${ingrediente.original}</li>`;
            
             });
             listIngredientsHtml = listIngredientsHtml + "</ul>"
        return {__html: listIngredientsHtml };
      }
    }

    //to handle tabs (instructions - ingredients)
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }; 

    return (
    (!results?.error) ? 
        <div className='container-details-recipes'>        
            <Grid container spacing={2}>   
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{ display: 'flex',
                            m: 1,
                            p: 1                    
                            }}
                    >    
                        <Typography variant="h5" className='title-detail-recipe' >{results.title}</Typography>
                    </Box>
                    <Box
                        sx={{ display: 'flex',
                            m: 1,
                            p: 1                    
                            }}
                    >     
                        
                        <img src={results.image} alt={results.title} width={'100%'} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}> 
                    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                        <Tab label="Instructions" />
                        <Tab label="Ingredients" />
                    </Tabs>
                    { value === 0 && (
                        <Box
                            sx={{
                                display: 'flex',
                                m: 1,
                                p: 1,
                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                color: (theme) =>
                                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            
                                fontSize: '0.875rem',
                                fontWeight: '700',
                        }}
                        >    
                            <Typography className='details-recipes' dangerouslySetInnerHTML={createMarkupInstructions()} ></Typography>
                        </Box>
                    )}
                    { value === 1 && (
                        <Box
                            sx={{
                            display: 'flex',
                            m: 1,
                            p: 1,
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) =>
                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                        
                            fontSize: '0.875rem',
                            fontWeight: '700',
                            }}
                        >            
                            <Typography className='details-recipes' dangerouslySetInnerHTML={createMarkupIngredients()}></Typography>
                        </Box>
                    )}
                </Grid>           
            </Grid>
        </div>  
    : <ErrorView /> 
    )
}
