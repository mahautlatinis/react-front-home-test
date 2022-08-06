import * as React from 'react';

//Imports material UI pour dark et light theme
import TagContextParent from "./components/TagContextParent/TagContextParent";
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green } from '@mui/material/colors';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export default function MyApp() {
  const [checked, setChecked] = React.useState(true);
  const [selectedMode, setSelectedMode] = React.useState(lightTheme);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (selectedMode === darkTheme)
      setSelectedMode(lightTheme);
    else 
      setSelectedMode(darkTheme);
  };
  
  return (
    <div>
    <ThemeProvider theme={selectedMode}>
      <div style={{backgroundColor: green[300]}}>
        <CssBaseline />
        <ul style={{alignItems: 'center', textAlign:"center"}}>
        <Switch
            checked={checked}
            color="default"
            onChange={handleChange}
          />
          <span style={{fontFamily: "Grotesk", fontWeight: "100"}}>Thème</span>
        </ul>
        </div>
      <TagContextParent/>
    </ThemeProvider>
  </div>
  );
}
