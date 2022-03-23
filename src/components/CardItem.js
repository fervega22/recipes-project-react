import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';

export const CardItem = ({id, title, image}) => {
  
  return (
      <Grid item xs={12} sm={4} md={3} key={id}>
        <Link to={"/recipe/" + id}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={title}
                    />
                    <CardContent>
                        <Typography  
                            className='card-item-recipe'
                            gutterBottom 
                            variant="h6" 
                            component="div">
                            {title}
                        </Typography>               
                    </CardContent> 
                </CardActionArea>
            </Card>           
        </Link>
    </Grid>
  )
}
