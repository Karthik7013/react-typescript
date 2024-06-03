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
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dateFormatter } from '.././../Utils/utils';

export default function Cardx(props: any) {
    const navigate = useNavigate();
    const isAuthenticated: boolean = useSelector((e: any) => e.auth.status);
    return <Card
        elevation={3} sx={{
            px: 3,
            width: '100%',
            borderRadius: '0.9em'
        }}>
        <CardHeader
            sx={{ px: 0, py: 3 }}
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <Typography textTransform={'uppercase'}>{props.author[0]}</Typography>
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <BookmarkBorderIcon />
                </IconButton>
            }
            title={props.title}
            subheader={dateFormatter(props.subheader)}
        />
        <CardMedia
            sx={{ borderRadius: "8px" }}
            onClick={() => { navigate(isAuthenticated ? `/postdetails/${props.id}` : "/signin") }}
            component="img"
            height="240"
            image={props.image}
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                {props.content}
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
}

