import { Box, Card, Grid, MenuItem, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { BarChart, LineChart } from '@mui/x-charts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { PieChart } from '@mui/x-charts/PieChart';

const Main = () => {
    // bargraph1 data
    const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
    const xLabels = [
        'Movies',
        'Games',
        'Travel',
        'Cooking',
        'Science',
        'Information',
        'Food',
    ];

    // groups-cards


    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={12} md={7} px={3}>
                    <Card elevation={5} sx={{ p: 5, borderRadius: '1em', position: 'relative' }}>
                        <BarChart
                            height={300}
                            series={[
                                { data: pData, label: 'No of posts', id: 'pvId', stack: 'total' },

                            ]}
                            xAxis={[{ data: xLabels, scaleType: 'band' }]}
                        />
                        <Stack direction={'row'} position={'absolute'}
                            top={16} right={16} spacing={2}>
                            {/* <TextField size='small' type="date"></TextField>
                            <TextField size='small' type="date"></TextField> */}
                            <TextField select value="week" size='small'>
                                <MenuItem value="week">This Week</MenuItem>
                                <MenuItem value="">This Month</MenuItem>
                                <MenuItem value="">This Year</MenuItem>
                                <MenuItem value="">Yearly</MenuItem>
                            </TextField>
                        </Stack>

                    </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Grid spacing={3} container >
                        <Grid item xs={12} md={6}>
                            <Card elevation={4} sx={{ borderRadius: '1em' }}>
                                <Stack p={'1em 12px'}>
                                    <Typography variant='caption' fontWeight={600} color={'GrayText'}>Total Posts</Typography>
                                    <Typography variant='h2' fontWeight={600}>123</Typography>
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
                <Grid item xs={12} md={7}>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        width={500}
                        height={300}
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    
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