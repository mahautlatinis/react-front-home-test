import React from 'react';
import Switch from '@mui/material/Switch';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { green } from '@mui/material/colors';
import Tag from "./components//Displaying/Tag/Tag";
import Recipe  from "./components/Displaying/Recipe/Recipe"
import Header from "./components//Displaying/Header/Header";
import Presentation from "./components/Displaying/Presentation/Presentation";
import Footer from "./components/Displaying/Footer/Footer";
import { MenuContextProvider } from "./context/MenuContext";
import { RecipeContextProvider } from "./context/RecipeContext";
import "./assets/styles/styles.css";

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
      <div style={{textAlign: "center"}}>
				<MenuContextProvider>
					<RecipeContextProvider>
						<Header />
						<Presentation />
						<Tag />
						<Recipe />
						<Footer />
					</RecipeContextProvider>
				</MenuContextProvider>
				<br/>
			</div>
    </ThemeProvider>
  </div>
  );
}
