import { createTheme } from "@mui/material";


const lightTheme = createTheme({
    palette: {
        mode: "light"
    },

    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }
            }
        }
    }
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})
export { lightTheme, darkTheme };