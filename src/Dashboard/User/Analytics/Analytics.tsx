import { Box, Card, CardMedia, Grid, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import { BarChart } from '@mui/x-charts';
// import { LineChart } from '@mui/x-charts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PieChart } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../../Utils/utils';
import { BASE_URL_ } from '../../../config';
import cardBg from "../../../assets/wave-haikei.svg"
import { handleLoading } from '../../../Redux/Actions/actions';

const Main = () => {
    const dispatch = useDispatch();

    const user = useSelector((e: any) => e.auth);
    const [chartData, setChartData] = useState<any>();

    const getData = async () => {
        const headers = {
            'x-auth-token': getToken()
        }
        dispatch(handleLoading(true))
        const res = await axios.get(`${BASE_URL_}/admin/dashboard/${user.data._id}`, { headers })
        if (res.status === 200) {
            setChartData(res.data)
        }
        dispatch(handleLoading(false))
    }

    useEffect(() => {
        if (user.status) {
            getData()
        }
    }, [user])

    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} md={7}>
                    <BarChart
                        height={200}
                        borderRadius={5}
                        series={[
                            { data: chartData ? Object.values(chartData?.categoryWisePosts) : [], label: 'No of posts', id: 'pvId', stack: 'total' },
                        ]}
                        xAxis={
                            [{
                                data: chartData ? Object.keys(chartData.categoryWisePosts) : [], scaleType: 'band'
                            }]
                        }
                    />
                    <Stack direction={'row'} position={'absolute'}
                        top={16} right={16} spacing={2}>
                        <TextField select value="week" size='small'>
                            <MenuItem value="week">This Week</MenuItem>
                            <MenuItem value="">This Month</MenuItem>
                            <MenuItem value="">This Year</MenuItem>
                            <MenuItem value="">Yearly</MenuItem>
                        </TextField>
                    </Stack>


                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid spacing={3} container >
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ borderRadius: '1em', position: 'relative' }}>
                                <Stack p={'1em 12px'} >
                                    <Typography variant='caption' fontWeight={600} color={'GrayText'}>Total Posts</Typography>
                                    <Typography variant='h2' fontWeight={600}>{chartData?.totalPosts}</Typography>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ borderRadius: '1em' }}>
                                <Stack p={'1em 12px'}>
                                    <Typography variant='caption' fontWeight={600} color={'GrayText'}>Posts Like</Typography>
                                    <Typography variant='h2' fontWeight={600}>{chartData?.totalLikes
                                    }<FavoriteIcon htmlColor='red' sx={{ fontSize: '0.8em' }} />
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ borderRadius: '1em' }}>
                                <Stack p={'1em 12px'}>
                                    <Typography variant='caption' fontWeight={600} color={'GrayText'}>Posts Like</Typography>
                                    <Typography variant='h2' fontWeight={600}>10<FavoriteIcon htmlColor='red' sx={{ fontSize: '0.8em' }} />
                                    </Typography>

                                </Stack>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ borderRadius: '1em' }}>
                                <Stack p={'1em 12px'}>
                                    <Typography variant='caption' fontWeight={600} color={'GrayText'}>Posts Like</Typography>
                                    <Typography variant='h2' fontWeight={600}>10<FavoriteIcon htmlColor='red' sx={{ fontSize: '0.8em' }} />
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <PieChart
                        series={[
                            {
                                arcLabel: (item) => `${item.value}`,
                                data: [
                                    { value: 5, label: 'Food' },
                                    { value: 10, label: 'Technology' },
                                    { value: 15, label: 'Science' },
                                    { value: 20, label: 'Movie' },
                                ],
                                innerRadius: 49,
                                outerRadius: 97,
                                paddingAngle: 3,
                                cornerRadius: 5,
                                startAngle: -1,
                                endAngle: 360,
                                cx: 150,
                                cy: 150,
                            }
                        ]}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main