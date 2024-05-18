import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface props {
    title: string,
    subheader: string,
    image: string,
    content: string
}
export default function RecipeReviewCard({ title, subheader, image, content }: props) {




    return (
        <Card elevation={3} sx={{
            width: '100%',
            maxWidth: 345, margin: 'auto', borderRadius: '0.9em', boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.3s",
            "&:hover": {
                md: {
                    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    scale: "1.05"
                }
            }
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <BookmarkBorderIcon />
                    </IconButton>
                }
                title={title}
                subheader={subheader}
            />
            <CardMedia
                component="img"
                height="100"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ThumbUpOffAltIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
