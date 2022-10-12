import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { color } from '@mui/system';
import '../components/TourCard.css'


export const TourCard = () => {
    

    return (
        <Grid item xs={3} className> 
                 <Paper elevation={3} className='box1'>
                <img className='img' src="https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg"
                 alt="niagrafalls" />
                
                <Box className='textbox' paddingX={1} >
                    <Typography   variant="subtitle1" component="h2">
                        Immerse into the falls
                    </Typography>
                </Box>
                </Paper> 
          </Grid>
    ) ; 
}

//31:14
//20:36
