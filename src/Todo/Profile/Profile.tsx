import { Box, Card, Typography, CardMedia, Avatar, Stack, List, ListItem, ListItemIcon, ListItemText, Chip, Button, Divider, IconButton, Grid, ListItemAvatar } from '@mui/material'
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Profile = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={9}>
                <Stack spacing={3}>
                    <Card sx={{ borderRadius: "1.2em", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ borderRadius: 0, position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height={200}
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNThI2lPZtfb92ADWF8butsM3Nlgf4uPYe4GwUSu1mWF6W2XlDEbLhmjG&s=10"
                                    alt="Live from space album cover"
                                />
                            </Card>
                            <Box position="absolute" bottom={-50} left={50}>
                                <Avatar sx={{ width: 100, height: 100 }} src='https://mui.com/static/images/avatar/1.jpg' alt='l'>
                                </Avatar>
                            </Box>
                        </Box>
                        <Box>
                            <Stack sx={{ pl: 25, my: 2, position: 'relative' }}>
                                <Typography variant='h4' fontWeight={600} color="GrayText">Karthik Tumala</Typography>
                                <List dense={true}>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: '36px' }}>
                                            <MailIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="karthiktumala143@gmail.com"
                                        />
                                    </ListItem>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: '36px' }}>
                                            <LocationOnIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary="Visakhapatname, Andhrapradesh 530024."
                                        />
                                    </ListItem>
                                    <ListItem sx={{ px: 0, gap: 2, flexWrap: 'wrap' }}>
                                        <Chip size='small' label="Frontend Developer" />
                                        <Chip size='small' label="ReactJS Developer" />
                                        <Chip size='small' label="JavaScript Developer" />
                                    </ListItem>
                                </List>
                                <Button endIcon={<NotificationsIcon />} sx={{ position: 'absolute', right: 16 }} variant="contained" >Follow</Button>
                            </Stack>
                        </Box>
                    </Card>

                    <Card sx={{ borderRadius: "1.2em", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: 2, position: 'relative' }}>
                        <Box>
                            <IconButton sx={{ position: "absolute", top: 10, right: 10 }}><EditIcon /></IconButton>
                            <Typography variant='body1' color="GrayText" fontWeight={600}>About</Typography>
                            <Box mt={2}>
                                <Typography paragraph>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit commodi deserunt ad libero amet dolore asperiores modi aspernatur qui odio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus delectus labore deserunt laborum id excepturi iusto, doloribus vero nisi magni. Ipsum impedit dolores vel quod at error natus deserunt quis quibusdam debitis quasi temporibus perspiciatis libero corrupti recusandae aliquam, enim nulla, deleniti officiis tempora rem ad! Maiores quos ratione quas! <br></br><Chip label="more..." size="small" clickable />
                                </Typography>
                            </Box>
                        </Box>
                    </Card>
                </Stack>
            </Grid>
            <Grid item xs={3}>
                <Stack spacing={3}>
                    <Card sx={{ borderRadius: "1.2em", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: 2 }}>
                        <Typography variant='body1' fontWeight={600} color="GrayText">Connect</Typography>
                        <Divider variant='fullWidth' />
                        <List dense={true}>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: '36px' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="karthiktumala143@gmail.com"
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: '36px' }}>
                                    <LanguageIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="www.google.com"
                                />
                            </ListItem>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ minWidth: '36px' }}>
                                    <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="www.google.com"
                                />
                            </ListItem>
                        </List>
                    </Card>
                    <Card sx={{ borderRadius: "1.2em", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", padding: 2 }}>
                        <Typography variant='body1' fontWeight={600} color="GrayText">Friends</Typography>
                        <Divider variant='fullWidth' />
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Brunch this weekend?"
                                    secondary={

                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>

                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Summer BBQ"
                                    secondary={

                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            to Scott, Alex, Jennifer
                                        </Typography>


                                    }
                                />
                            </ListItem>

                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Oui Oui"
                                    secondary={

                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Sandra Adams
                                        </Typography>


                                    }
                                />
                            </ListItem>
                        </List>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Profile