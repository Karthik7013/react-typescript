import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress, Snackbar, Alert, InputAdornment, Stack, FormHelperText, Card } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useForm } from 'react-hook-form';
import { BASE_URL_ } from '../../config';
import logo from "../../assets/logo.png"
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



    const [err, setErr] = useState(false);
    // const [success,setSuccess] = useState(false)
    const loading = useSelector((e: any) => e.loading)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [remember, setRemeber] = useState(false)

    const handleSubmitForm = async (data: any) => {
        let userSignInData = {
            ...data,
            remember
        };
        try {
            dispatch({ type: 'LOADING', payload: true })
            let res = await axios.post(`${BASE_URL_}/user/login`, userSignInData)
            if (res.status === 200) {
                if (res.data?.token) {
                    localStorage.setItem('token', res.data?.token);
                    window.location.href = "/"
                }
            }
        } catch (error) {
            setErr(true)
            dispatch({ type: 'LOADING', payload: false })
            console.log('failed to authenticated')
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
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={err}
                autoHideDuration={2000}
                onClose={() => { setErr(false) }}
            ><Alert sx={{ width: '100%' }} variant='filled' severity='error'>Invalid Login Details</Alert>
            </Snackbar>
        </Container>
    );
}