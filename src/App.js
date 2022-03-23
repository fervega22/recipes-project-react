
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Pages } from "./pages/Pages";

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#f97b2f',
      },
    },
  });

  return ( 
  
      <ThemeProvider theme={darkTheme}>   
    
        <Pages />   
                
      </ThemeProvider> 

     
  );
}

export default App;
