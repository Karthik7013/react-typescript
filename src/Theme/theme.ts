import { createTheme } from "@mui/material";
import * as colors from "@mui/material/colors";

const theme = (customTheme: "light" | "dark") => {


    const theme = createTheme({
        palette: {
            mode: 'light'
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