
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, InputAdornment, Stack } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useForm } from 'react-hook-form';
import { BASE_URL_ } from '../../config';
import logo from "../../assets/logo.png"
import { handleAlert, handleLoading } from '../../Redux/Actions/actions';
import { initialStateProps } from '../../Types/Types';
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Bloger Blogs
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignIn() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const loading = useSelector((e: initialStateProps) => e.loading)
    const dispatch = useDispatch()

    const handleSubmitForm = async (data: any) => {
        const userSignInData = {
            ...data
        };
        try {
            dispatch(handleLoading(true))
            const res = await axios.post(`${BASE_URL_}/user/login`, userSignInData)
            if (res.status === 200) {
                if (res.data?.token) {
                    localStorage.setItem('token', res.data?.token);
                    window.location.href = "/"
                }
            }
        } catch (error) {
            dispatch(handleAlert({ type: 'error', message: 'Internal Error', state: true }))
        } finally {
            dispatch(handleLoading(false))
        }
    };

    return (
        <Container component={Stack} maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1 }} src={logo} />
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Stack
                    justifyContent='center'
                    mt={2}
                    spacing={2}
                    component="form"
                    onSubmit={handleSubmit(handleSubmitForm)}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        fullWidth
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                            endAdornment: <InputAdornment position="end">{!!errors.email && <ErrorOutlineIcon color='error' />}</InputAdornment>
                        }}
                        helperText={!!errors.email && 'Invalid email address'}
                        label="Email"
                        variant="outlined"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address'
                            },
                        })}
                        error={!!errors.email}
                    />
                    <TextField
                        fullWidth
                        helperText={!!errors.password && 'Password is Require'}
                        label="Password"
                        type="password"
                        variant="outlined"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 4,
                                message: 'Password must be at least 6 characters long',
                            }
                        })}
                        InputProps={{
                            startAdornment: <InputAdornment position="start"><PasswordIcon /></InputAdornment>,
                        }}
                        error={!!errors.password}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        disabled={loading}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        {loading ? <CircularProgress size="30px" /> : 'Sign In'}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <GoogleLogin onSuccess={credentialResponse => {
                        console.log(credentialResponse);
                    }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </Stack>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}