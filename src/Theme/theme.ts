import { createTheme } from "@mui/material";

const theme = (customTheme: "light" | "dark") => {


    const theme = createTheme({
        palette: {
            mode: customTheme
        },

        components: {

        },
        shape: { borderRadius: 10 },
        typography:{
            fontFamily:'Montserrat',

        }
    })
    return theme
}

export { theme };