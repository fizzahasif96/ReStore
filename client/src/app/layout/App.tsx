import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {  
 

  
  const [darkMode, setDarkMode] = useState(false)
  const paletteMode = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette : {
      mode: paletteMode,
      background: {
        default: paletteMode === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode = {darkMode} handleThemeChange = {handleThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
