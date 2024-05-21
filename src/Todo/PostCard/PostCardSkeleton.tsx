import { Card, CardActions, CardContent, CardHeader, Skeleton } from '@mui/material'
import React from 'react'

const PostCardSkeleton = () => {
    return (

        <Card sx={{
            width: '100%',
            maxWidth: { md: 345 }, margin: 'auto', borderRadius: '0.9em',
        }}>
            <CardHeader
                avatar={
                    <Skeleton animation="wave" variant="circular" width={40} height={40} />
                }
                title={
                    <Skeleton
                        animation="wave"
                        height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                    />
                }
                subheader={
                    <Skeleton animation="wave" height={10} width="40%" />
                }
            />
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            <CardContent>
                <>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </>
            </CardContent>
            <CardActions>
                <Skeleton animation="wave" variant="circular" width={32} height={32} />
                <Skeleton animation="wave" variant="circular" width={32} height={32} />
            </CardActions>
        </Card>

    )
}

export default PostCardSkeleton;