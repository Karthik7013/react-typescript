import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dateFormatter } from '.././../Utils/utils';
import { AvatarGroup, Box, Checkbox, Chip, Divider, ListItem, ListItemIcon, ListItemText, Stack, styled, TextField } from '@mui/material';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { initialStateProps } from '../../Types/Types';

type CardxProps = {
    image: string
    id: string,
    author: string,
    subheader: string,
    title: string,
    content: string
}

const StyledPostCard = styled(Card)({

})

export default function Cardx(props: CardxProps) {
    const navigate = useNavigate();
    const isAuthenticated: boolean = useSelector((e: initialStateProps) => e.auth.status);
    return <StyledPostCard
        elevation={3} sx={{
            px: 3,
            width: '100%',
            borderRadius: '0.9em'
        }}>
        <CardHeader
            sx={{ px: 0, py: 3 }}
            avatar={
                <Avatar sx={{ bgcolor: red[500] }}>
                    <Typography textTransform={'uppercase'}>{props.author[0]}</Typography>
                </Avatar>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreVertRoundedIcon />
                </IconButton>
            }
            title={<Typography textTransform="capitalize">{props.author}</Typography>}
            subheader={`${dateFormatter(props.subheader)}`}
        />
        <CardMedia
            sx={{ borderRadius: "8px" }}
            onClick={() => { navigate(isAuthenticated ? `/postdetails/${btoa(props.id)}` : "/signin") }}
            component="img"
            height="240"
            image={props.image}
            alt="Paella dish"
        />
        <CardContent sx={{ px: 0, pb: 0 }}>
            <Typography sx={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} variant='h6'>
                {props.title}
            </Typography>

            <Typography sx={{ maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} noWrap variant="subtitle2" color="text.secondary">
                {props.content}
            </Typography>
        </CardContent>
        <CardActions sx={{ py: 1, px: 0, flexDirection: 'column' }}>

            <Stack sx={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <Box>
                    <Checkbox checkedIcon={<ThumbUpRoundedIcon color='primary' />} icon={<ThumbUpOffAltIcon />}></Checkbox>
                </Box>

                <Stack direction="row" gap={3}>
                    <Typography variant='body2'><span>123</span> Likes</Typography>
                    <Typography variant='body2'><span>56</span> Comments</Typography>
                </Stack>
            </Stack>
        </CardActions>
    </StyledPostCard>
}

