import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import TemporaryDrawer from './SideDrawer'
import RecipeReviewCard from './PostCard';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PostDetails from './PostDetails'
const App = () => {
    const Temp = () => {
        return <RecipeReviewCard image='https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg' content='This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.' title='Shrimp and Chorizo Paella' subheader='September 14, 2016' />
    }
    return (
        <Box sx={{ maxHeight: '100dvh' }}>
            <Header />
            <Grid container >
                <Grid item xs={0} md={2} sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}>
                    left
                </Grid>
                <Grid item xs={12} md={8} >
                    <Grid container spacing={2} px={{ xs: 2, md: 0 }} py={2}>
                        <Grid item xs={12}>
                            <Typography variant='h4'>Top rated Posts</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Temp />
                        </Grid>
                        <Grid item xs={12} component={Stack} justifyContent='center'>
                            <Button size='small' disableFocusRipple disableRipple variant='text' endIcon={<ArrowDropDownIcon />}>show more</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={0} md={2}>right</Grid>
            </Grid>
            <Box bgcolor='#f5f5f5'>
                <Container maxWidth={'lg'} sx={{ py: 4, mt: 10 }} >
                    <PostDetails />
                </Container>
            </Box>


        </Box>
    )
}

export default App