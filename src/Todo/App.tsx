import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import TemporaryDrawer from './SideDrawer'
import RecipeReviewCard from './PostCard'
const App = () => {
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
                    <Grid container spacing={2} px={{ xs: 2, md: 0 }}>
                        <Grid item xs={12}>
                            <Typography variant='h4'>Top rated Posts</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <RecipeReviewCard />
                        </Grid>

                    </Grid>

                </Grid>
                <Grid item xs={0} md={2}>right</Grid>
            </Grid>
        </Box>
    )
}

export default App