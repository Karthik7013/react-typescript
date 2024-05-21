import { Autocomplete, Button, CircularProgress, FormControlLabel, IconButton, Stack, Switch, TextField, Typography } from '@mui/material'
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import BASE_URL_ from '../../config';
type CreatePostProps = {
    toggle: (value: boolean) => void;
};
const CreatePost = (props: CreatePostProps) => {
    let loading: boolean = useSelector((e: any) => e.loading);
    const dispatch = useDispatch()
    const category = [
        { label: 'Scientific', icon: 'science' },
        { label: 'Food', icon: 'fastFood' },
        { label: 'Travel', icon: 'flight' },
        { label: 'News', icon: 'newspaper' },
        { label: 'Movies', icon: 'theaterComedy' },
        { label: "Music", icon: 'audioTrack' },
        { label: 'Information', icon: 'lightBulbCircle' },
    ];
    let user = useSelector((e: any) => e.auth.data);
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let data = {
            title: "The First post Demo title",
            subtitle: "okey this is added",
            authorName: user?.name,
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS648NVi2-QaglnIqsI2zMthGTQz8avHaol9ytKHOjFyA&s",
            description: "lorem content will displayed here....",
            category: [
                "food",
                "cooking"
            ]
        }
        const token = localStorage.getItem('token');
        const headers = {
            "x-auth-token": token
        }
        if (token) {
            try {
                dispatch({ type: 'LOADING', payload: true })
                let res = await axios.post(`${BASE_URL_}/admin/createpost`, data, { headers })
                if (res.status === 201) {
                    dispatch({ type: 'ADD_POST', payload: res.data.post });
                    props.toggle(false)
                }
            } catch (error) {
                console.log('failed to create')
            }
            finally {
                dispatch({ type: 'LOADING', payload: false })
            }
        } else {
            console.log('token not found login again')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <IconButton size='small' sx={{ position: 'absolute', top: 10, right: 10 }} onClick={() => { props.toggle(false) }}>
                <CancelIcon fontSize='small' />
            </IconButton>
            <Typography color='GrayText' variant='h5'>Create Post</Typography>
            <Stack py={2} spacing={2}>
                <TextField variant='outlined' label="Title"></TextField>
                <TextField variant='outlined' label="Subtitle"></TextField>
                <TextField type='file'></TextField>
                <Autocomplete
                    fullWidth
                    multiple
                    options={category}
                    renderInput={(params) => <TextField {...params} label="Category" />}
                />
                <FormControlLabel control={<Switch defaultChecked />} label={<Typography variant='caption'>{"Make as Private Post"}</Typography>} />
                <TextField multiline rows={4} placeholder='Description'></TextField>
                <Button disabled={loading} type='submit' variant='contained'>{loading ? <CircularProgress /> : "Submit"}</Button>
            </Stack>
        </form>
    )
}

export default CreatePost