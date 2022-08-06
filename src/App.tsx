import * as React from 'react';

//Imports material UI pour dark et light theme
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
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

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function MyApp() {
  const [checked, setChecked] = React.useState(true);
  const [selectedMode, setSelectedMode] = React.useState(lightTheme);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (selectedMode == darkTheme)
      setSelectedMode(lightTheme);
    else 
      setSelectedMode(darkTheme);
  };
  
  return (
    <>
    <ThemeProvider theme={selectedMode}>
      <div style={{backgroundColor: green[500]}}>
        <CssBaseline />
        <ul>
        <Switch
            {...label}
            checked={checked}
            color="default"
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span>{selectedMode == lightTheme ? "Thème light" : "Thème sombre"}</span>
        </ul>
        </div>
      <TagContextParent/>
    </ThemeProvider>
  </>
  );
}
