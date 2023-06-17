import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { useState } from 'react';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [b1Animate, setB1Animate] = useState(false);
  const [b2Rotate, setB2Rotate] = useState(false);
  const [b3Position, setB3Position] = useState(false);
  const [b4Color,  setB4Color] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        setB1Animate={setB1Animate}
        setB2Rotate={setB2Rotate}
        setB3Position={setB3Position}
        setB4Color={setB4Color}
      />
      <Body
        b1Animate={b1Animate}
        b2Rotate={b2Rotate}
        b3Position={b3Position}
        b4Color={b4Color}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;