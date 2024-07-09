import { AppBar, Box, Divider, MenuItem, Tab, TextField, Toolbar, Tabs, Avatar, Stack, IconButton, InputAdornment, Container, Typography, Button, Chip, Card, CardHeader, CardContent, CardActions, CardMedia, ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
const AdminHome = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Posts',
      type: 'number',
      width: 90,
    },



  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, sub: true },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, sub: false },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, sub: true },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, sub: false },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 50, sub: false },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150, sub: false },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, sub: true },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, sub: false },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, sub: false },
  ];
  return (
    <Box>
      <AppBar sx={
        {
          boxShadow:'none',
          bgcolor:'transparent',
          backdropFilter: 'blur(8px)',
        }
      }>
        <Toolbar>
          <Stack direction={'row'} flex={1} gap={1} alignItems={'center'}>
            <TextField select value='johnDoe' size="small" >
              <MenuItem value={'johnDoe'}>John Doe</MenuItem>
            </TextField>

            <Box>
              <Tabs value={'Overview'}>
                <Tab label="Overview" />
                <Tab label="Customers" />
                <Tab label="Posts" />
                <Tab label="Settings" />
              </Tabs>

            </Box>
          </Stack>
          <Stack direction="row" gap={4} alignItems='center'>
            <TextField placeholder="Search" size="small" InputProps={{
              startAdornment: <InputAdornment position="start"><SearchRoundedIcon /></InputAdornment>,
            }}></TextField>
            <IconButton size="small">
              <Avatar src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg"></Avatar>
            </IconButton>
          </Stack>


        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
      <Container maxWidth="lg">
        <Stack direction='row' justifyContent={'space-between'} mt={3}>
          <Typography variant="h5">Overview</Typography>
          <Stack direction="row" gap={1}>
            <TextField type="date" size="small"></TextField>
            <Button variant="contained" size="small">Download</Button>
          </Stack>
        </Stack>


        <Stack direction='row' gap={2}>


        </Stack>




        <DataGrid
          sx={{ my: 3 }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />

      </Container>

    </Box>
  )
}

export default AdminHome