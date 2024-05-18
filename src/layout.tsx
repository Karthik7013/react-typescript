import { Box, Stack, Typography } from "@mui/material"
const layout = () => {
    return (
        <Box>
            <Stack direction='column' minHeight='100dvh'>
                <Stack justifyContent='center' bgcolor='gray' height={'65px'}>header</Stack>
                <Box sx={{ height: 'calc(100dvh - 65px)', display: 'flex' }}>
                    <Box sx={{ display:{xs:'none',md:'flex'},kflexGrow: 1, minWidth: 200, p: 2, bgcolor: 'pink' }}>left</Box>
                    <Box sx={{ flexGrow: 3, p: 1,overflowY:'scroll' }}>
                        <Typography variant='h6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores ipsum at libero illo magnam quis totam dignissimos cupiditate eveniet nostrum quasi cumque dolores officiis ipsam, eaque culpa sapiente id vero reprehenderit. Quo laudantium inventore magni itaque rem? Assumenda repudiandae officiis saepe odit dolor porro ex sequi unde minima, dolore, quidem soluta dolores natus, exercitationem placeat nisi dicta vero pariatur asperiores corporis illum doloremque repellat. Sequi dicta quaerat adipisci non, distinctio nobis dolorum voluptate iusto, laudantium enim eius blanditiis sed assumenda laboriosam doloribus veritatis! Quisquam rerum suscipit modi, mollitia, nulla similique omnis quam quod voluptatibus voluptate illum, doloremque possimus recusandae.</Typography>
                    </Box>
                    <Box sx={{ display:{xs:'none',md:'flex'},flexGrow: 1, minWidth: 200, p: 2, bgcolor: 'pink' }}>right</Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default layout