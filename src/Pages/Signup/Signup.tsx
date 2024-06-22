import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import { useForm } from 'react-hook-form';
import logo from "../../assets/logo.png"
import { BASE_URL_ } from '../../config';
import { handleAlert, handleLoading } from '../../Redux/Actions/actions';
import { initialStateProps } from '../../Types/Types';
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" >
            {'Copyright © '}
            <Link color="inherit" href="https://bloggerblogs.netlify.app">
                Blogger Blogs
            </Link>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}



export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [err, setErr] = React.useState(false);
    const dispatch = useDispatch();
    const loading = useSelector((e: initialStateProps) => e.loading);
    const navigate = useNavigate()
    const handleSubmitForm = async (data: any) => {
        try {
            dispatch(handleLoading(true))
            const res = await axios.post(`${BASE_URL_}/user/registe`, data)
            if (res.status === 201) {
                navigate('/signin')
            }
        } catch (error) {
            dispatch(handleAlert({ type: "error", message: 'Internal Error', state: true }))
        } finally {
            dispatch(handleLoading(false))
        }
    };
    return (
        <Container component="main" maxWidth="xs">

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
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(handleSubmitForm)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...register('userName', {
                                    required: 'Name is required'
                                })}
                                error={!!errors.userName}
                                autoComplete="given-name"
                                required
                                fullWidth
                                label="User Name"
                                autoFocus
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...register('name', {
                                    required: 'Name is required'
                                })}
                                error={!!errors.name}
                                required
                                fullWidth

                                label="Name"

                                autoComplete="family-name"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>
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
                        </Grid>
                        <Grid item xs={12}>
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
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I accept the terms and conditions."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size='30px' /> : "Sign Up"}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright />

        </Container>
    );
}