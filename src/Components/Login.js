import { Container, Grid, Paper } from '@mui/material';
import React from 'react';


const Login = () => {
    return (
        <div>

            <Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }} >
                <Grid container spacing={2} direction='column' justifyContent='center' style={{ minHeight: '100vh' }}
                >
                    <Paper elevation={2} sx={{ padding:5 }}>
                        <Grid container direction='column' spacing={2}>

                        </Grid>
                    </Paper>
                </Grid>
            </Container>

        </div>
    );
};

export default Login;