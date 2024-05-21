import { Autocomplete, Button, IconButton, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector } from 'react-redux';
const CreatePost = () => {
    const category = [
        { label: 'Scientific', year: 1994 },
        { label: 'Food', year: 1972 },
        { label: 'Travel', year: 1974 },
        { label: 'News', year: 2008 },
        { label: 'Movies', year: 1957 },
        { label: "Music", year: 1993 },
        { label: 'Information', year: 1994 },
    ];
    let user = useSelector((e:any)=>e.auth.data);




    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let data = {
            title: "The First post Demo title test",
            subtitle: "okey this is added",
            authorName: user.name,
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
                let res = await axios.post("http://localhost:8000/api/v1/admin/createpost",data, { headers })
                console.log(res.data)
            } catch (error) {
console.log('failed to create')
            }
        }else{
            console.log('token not found login again')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <IconButton size='small' sx={{ position: 'absolute', top: 10, right: 10 }} onClick={() => { }}>
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
                <TextField multiline rows={4} placeholder='Description'></TextField>
                <Button type='submit' variant='contained'>Submit</Button>
            </Stack>
        </form>
    )
}

export default CreatePost