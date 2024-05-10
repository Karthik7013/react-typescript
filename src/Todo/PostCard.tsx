import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}
interface props {
    title: string,
    subheader: string,
    image: string,
    content: string
}
export default function RecipeReviewCard({ title, subheader, image, content }: props) {


    const cardStyles = {

    }

    return (
        <Card elevation={3} sx={{
            maxWidth: 345, margin: 'auto', borderRadius: '0.9em', boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transition: "0.3s",
            "&:hover": {
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
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
