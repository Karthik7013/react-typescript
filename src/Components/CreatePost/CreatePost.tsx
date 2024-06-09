import { Autocomplete, Button, CircularProgress, FormControlLabel, IconButton, Stack, Switch, TextField, Typography } from '@mui/material'
import axios from 'axios';
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL_ } from '../../config';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useState } from 'react';











function CreatePostDialog(props: any) {
    const [values, setValues] = useState([])
    const [data, setData] = useState<any>({
        title: "",
        subtitle: "",
        // authorName: user.name,
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS648NVi2-QaglnIqsI2zMthGTQz8avHaol9ytKHOjFyA&s",
        description: "",
        category: []
    })

    const handleOnChange = (e: any) => {
        const { value, name, checked } = e.target;
        switch (name) {
            case 'title':
                setData({ ...data, title: value })
                break;
            case 'subtitle':
                setData({ ...data, subtitle: value })
                break;
            case 'private':
                setData({ ...data, private: checked })
                break;
            case 'description':
                setData({ ...data, description: value })
                break;
            default:
                break;
        }
    }
    const handleSelect = (event: any, value: any) => {
        console.log(value)
        setValues(value);
    }


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
        const postBody = { ...data, authorName: user.name, category: values.map((category: any) => category.label) }
        console.log(postBody, "postbody");
        const token = localStorage.getItem('token');
        const headers = {
            "x-auth-token": token
        }

        if (token) {
            try {
                dispatch({ type: 'LOADING', payload: true })
                const res = await axios.post(`${BASE_URL_}/admin/createpost`, postBody, { headers })
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
        <>
            <Dialog
                open={props.open}
                scroll={'body'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogContent dividers={!false}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <form onSubmit={handleSubmit}>
                            <IconButton size='small' sx={{ position: 'absolute', top: 10, right: 10 }} onClick={() => { props.toggle(false) }}>
                                <CancelIcon fontSize='small' />
                            </IconButton>
                            <Typography color='GrayText' variant='h5'>Create Post</Typography>
                            <Stack py={2} spacing={2}>
                                <TextField value={data?.title} name='title' variant='outlined' onChange={handleOnChange} label="Title">

                                </TextField>

                                <TextField value={data?.subtitle} name='subtitle' variant='outlined' label="Subtitle" onChange={handleOnChange}></TextField>
                                <TextField name='file' type='file' onChange={handleOnChange}></TextField>
                                <Autocomplete
                                    value={values}
                                    onChange={handleSelect}
                                    fullWidth
                                    multiple
                                    options={category}
                                    renderInput={(params) => <TextField {...params} label="Category" />}
                                />
                                <FormControlLabel value={data?.private} onChange={handleOnChange} name='private' control={<Switch />} label={<Typography variant='caption'>{"Make as Private Post"}</Typography>} />
                                <TextField value={data?.description} name='description' onChange={handleOnChange} multiline rows={4} placeholder='Description'></TextField>
                                <Button disabled={loading} type='submit' variant='contained'>{loading ? <CircularProgress /> : "Submit"}</Button>
                            </Stack>
                        </form>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}
export default CreatePostDialog;
