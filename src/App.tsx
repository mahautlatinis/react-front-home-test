import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TagContextParent from "./components/TagContextParent/TagContextParent";
import Switch from '@mui/material/Switch';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//Buttonn swith customise
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

//tests pour animations
import Grow from '@mui/material/Grow';

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
    <ThemeProvider theme={selectedMode}>
      <CssBaseline />
      {/*<main>This app is using the dark mode</main>*/}
      <ul>
      <Switch
          {...label}
          checked={checked}
          color="success"
          //label="Select dark/light mode"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <span>Choose your mode !</span>
      </ul>
      <TagContextParent/>
    </ThemeProvider>

  );
}
