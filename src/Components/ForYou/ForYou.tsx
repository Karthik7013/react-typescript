import { Box, CircularProgress, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PostCardSkeleton from '../PostCard/PostCardSkeleton'
import { initialStateProps, post } from '../../Types/Types'
import { useSelector } from 'react-redux'
import PostCard from '../PostCard/PostCard';
const ForYou = () => {
  const loading = useSelector((e: initialStateProps) => e.loading);
  const topRatedPosts = useSelector((e: initialStateProps) => e.posts);
  return (
<Grid container spacing={2} px={{ xs: 1, md: 2 }} py={2}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>For You</Typography>
                        </Grid>

                        {loading && <>
                            {[1, 2, 3].map((e) => <Grid key={e} item xs={12}>
                                <PostCardSkeleton />
                            </Grid>
                            )}
                        </>
                        }

                        {topRatedPosts.map((post: post) => {
                            return <Grid item key={post._id} xs={12}>
                                <PostCard
                                    author={post.authorName}
                                    id={post._id}
                                    image={post.imgUrl}
                                    title={post.title}
                                    content={post.description}
                                    subheader={post.createdAt}
                                />
                            </Grid>
                        })}
                        <Toolbar sx={{ width: '100%' }}>
                            <Box sx={{ margin: 'auto' }}>
                                <CircularProgress size={20} />
                            </Box>
                        </Toolbar>
                    </Grid>
  )
}

export default ForYou