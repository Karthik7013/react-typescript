import { Button, Stack, Toolbar, Typography } from '@mui/material'


import err1 from "../../assets/pagenotfound.svg"
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <Stack alignItems={'center'} justifyContent='center' sx={{ height: '100dvh' }}>
            <img src={err1} width="60%" height="60%" alt="" />
            <Typography variant='h5'>Sorry, Page not found</Typography>
            <Stack direction="row" gap={2} alignItems="center">
                <ArrowBackRoundedIcon fontSize='small' />
                    <Typography textTransform="capitalize" variant='h6' >Home</Typography>
            </Stack>
        </Stack>
    )
}

export default PageNotFound