import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material'

type SimilarCardProps = {
  image: string,
  title: string,
  content: string
}

const SimilarCard = (props: SimilarCardProps) => {
  return (
    <Card sx={{ borderRadius: '0.8em' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default SimilarCard