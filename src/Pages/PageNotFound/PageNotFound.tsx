import { Stack } from '@mui/material'
import React from 'react'
import err from "../../assets/404 error with portals-amico.svg"


const PageNotFound = () => {
    return (
        <Stack alignItems={'center'} justifyContent='center' sx={{ height: '100dvh', background: "#23a8fa" }}>
            <img src={err} width="40%" height="40%" alt="" />
        </Stack>
    )
}

export default PageNotFound