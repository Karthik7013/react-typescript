import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const RecentPosts = () => {
    const UserAvatar = (props: any) => {
        const Ring = styled(Box)({
            boxSizing: 'border-box',
            borderRadius: '50%',
            padding: '2px',
            border: '2px solid'
        })
        return <Ring>
            <Avatar src={props.url} alt='t' sx={{ width: "56px", height: '56px' }}></Avatar>
        </Ring>
    }
  return (
<Box p={2} pb={0}>
                        <Typography gutterBottom variant='h6'>Recent Posts</Typography>
                        <Stack sx={{ overflowX: 'scroll' }} direction='row' spacing={2} alignItems='center'>
                            <UserAvatar url='https://mui.com/static/images/avatar/3.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/3.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                            <UserAvatar url='https://mui.com/static/images/avatar/4.jpg' />
                        </Stack>
                    </Box>
  )
}

export default RecentPosts