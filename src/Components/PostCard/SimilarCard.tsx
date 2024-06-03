import { Card, CardActionArea, CardContent, CardMedia,Typography,Button } from '@mui/material'
import React from 'react'

const SimilarCard = () => {
  return (
<Card sx={{ borderRadius:'0.8em' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS648NVi2-QaglnIqsI2zMthGTQz8avHaol9ytKHOjFyA&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000...
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SimilarCard