import { Box, Card, Typography, CardMedia, Avatar, Stack, List, ListItem, ListItemIcon, ListItemText, Chip, Button, Divider, IconButton, Grid, ListItemAvatar, ListItemButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';

const Profile = () => {
    const data = useSelector((e: any) => e.auth.data);
    const work = ["ReactJS Developer", "Frontend Developer", "JavaScript Developer"];


    return (
        <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
                <Stack spacing={3}>
                    <Card sx={{ borderRadius: "1.2em" }}>
                        <Box sx={{ position: 'relative' }}>
                            <Card sx={{ borderRadius: 0, position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height={200}
                                    image="https://4kwallpapers.com/images/walls/thumbs_3t/1455.jpg"
                                    alt="Live from space album cover"
                                />
                            </Card>
                            <Box sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: "inherit", borderRadius: 999 }} position="absolute" bottom={-50} left={50}>
                                <Avatar sx={{ width: 100, height: 100 }} src='https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1718108124~exp=1718111724~hmac=dcff80501b7b1dc4eed6e354b101835b3299b5abf724de46b25712af2f5a5d9f&w=826' alt='l'><Typography variant='h4' sx={{ textTransform: 'capitalize', fontSize: '2em', fontWeight: 600 }}>{data?.name[0]}</Typography>
                                </Avatar>
                            </Box>
                        </Box>
                        <Box>
                            <Stack sx={{ pl: { xs: 2, md: 25 }, my: 2, position: 'relative' }}>
                                <Typography sx={{ textTransform: 'capitalize' }} variant='h4' fontWeight={600}>{data?.name}</Typography>
                                <List dense={true}>
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: '36px' }}>
                                            <MailIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={data?.email}
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
                                    <ListItem sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: '36px' }}>
                                            < WorkRoundedIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            work.map((e: string) => <Chip sx={{ mr: 1 }} key={e} size='small' label={e} />)
                                        }>
                                        </ListItemText>
                                    </ListItem>

                                </List>
                                <Button endIcon={<NotificationsIcon />} sx={{ position: 'absolute', right: 16 }} variant="contained" >Follow</Button>
                            </Stack>
                        </Box>
                    </Card>

                    <Card sx={{ borderRadius: "1.2em", padding: 2, position: 'relative' }}>
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
            <Grid item xs={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
                <Stack spacing={3}>
                    <Card sx={{ borderRadius: "1.2em"}}>
                        <Typography sx={{pl:2,py:2}} variant='body1' fontWeight={600} >Connect</Typography>
                        <Divider variant='fullWidth' />
                        <List dense={true}>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: '36px' }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="karthiktumala143@gmail.com"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: '36px' }}>
                                    <LanguageIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="www.google.com"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon sx={{ minWidth: '36px' }}>
                                    <LinkedInIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="www.google.com"
                                />
                            </ListItem>
                        </List>
                    </Card>
                    <Card sx={{ borderRadius: "1.2em" }}>
                        <Typography sx={{pl:2,py:2}} variant='body1' fontWeight={600} >Friends</Typography>
                        <Divider variant='fullWidth' />
                        <List sx={{ width: '100%', maxWidth: 360 }} dense>
                            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                                <ListItemButton>
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
                                </ListItemButton>
                            </ListItem>

                            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                                <ListItemButton>
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
                                </ListItemButton>
                            </ListItem>

                            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                                <ListItemButton>
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
                                </ListItemButton>
                            </ListItem>
                        </List>
                        <Typography textAlign='center' variant='body2' component="a" href='/'>more</Typography>
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Profile