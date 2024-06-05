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
import { Checkbox } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

type CardxProps = {
    image: string
    id: string,
    author: string,
    subheader: string,
    title: string,
    content: string
}

export default function Cardx(props: CardxProps) {
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
            title={<Typography textTransform="capitalize">{props.author}</Typography>}
            subheader={dateFormatter(props.subheader)}
        />
        <CardMedia
            sx={{ borderRadius: "8px" }}
            onClick={() => { navigate(isAuthenticated ? `/postdetails/${btoa(props.id)}` : "/signin") }}
            component="img"
            height="240"
            image={props.image}
            alt="Paella dish"
        />
        <CardContent sx={{ px: 0 }}>
            <Typography variant="h6" color="text.secondary">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.content}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Checkbox checkedIcon={<FavoriteIcon color='error' />} icon={<FavoriteBorderIcon />}></Checkbox>

            <Checkbox checkedIcon={<ThumbUpRoundedIcon color='primary'/>} icon={<ThumbUpOffAltIcon />}></Checkbox>

            {/* <IconButton aria-label="share">
                <ThumbUpOffAltIcon />
            </IconButton> */}
        </CardActions>
    </Card>
}

