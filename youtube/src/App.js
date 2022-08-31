import { BrowserRouter , Routes , Route ,Navigate} from 'react-router-dom';
import { Box } from '@mui/material';
import ChanelDetails from './components/ChanelDetails';
import SearchFeed from './components/SearchFeed';
import VideoDetails from './components/VideoDetails';
import Feed from './components/Feed';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor:"#000" }}>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id'  element={<VideoDetails/>}/>
            <Route path='/chanel/:id'  element={<ChanelDetails/>}/>
            <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>
            <Route path='/*'  element={<Navigate to="/" />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
