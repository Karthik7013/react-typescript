import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import React from 'react'


const SavedPost = () => {
    return (
        <Box>
            <Typography variant="h6">Saved Posts | Dashboard</Typography>
            <>
                <List dense={true}>
                    <Stack divider={<Divider component="linearGradient" />}>
                        <ListItemButton disableRipple>
                            <ListItem
                                sx={{ px: 0 }}
                                secondaryAction={
                                    <Stack direction='row' spacing={2}>
                                        <IconButton edge="end" aria-label="delete">
                                            {/* <DeleteIcon color='error' /> */}
                                        </IconButton>
                                    </Stack>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar variant='rounded' src={""}>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={""}
                                    secondary={""
                                    }
                                />
                            </ListItem>
                        </ListItemButton>
                    </Stack>
                </List>
            </>
        </Box>
    )
}

export default SavedPost;