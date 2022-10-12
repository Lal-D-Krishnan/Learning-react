import './App.css';
import  {TourCard}  from './components/TourCard';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';


function App() {
  return (
    <div className="App">
       <Container>
       <Grid container spacing={9}>
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            <TourCard />
            
        </Grid>   
       </Container>
    </div>
  );
}

export default App;
