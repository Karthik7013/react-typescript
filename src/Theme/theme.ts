import { createTheme } from "@mui/material";


const lightTheme = createTheme({
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: 'Montserrat',
    },

})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: 'Montserrat',
    }
})
export { lightTheme, darkTheme };