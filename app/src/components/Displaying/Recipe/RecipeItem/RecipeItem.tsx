import React from "react";
import { RecipeItemInterface } from "../../../../interfaces/Recipe/Recipe.interface";
import Ingredient from "../Ingredient/Ingredient";
import Step from "./Step/Step"
import { Chip } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';

export default function RecipeItem(props: RecipeItemInterface)
{
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
      <>
          <Card sx={{ width: "275px", padding: "20px", margin: "10px", borderRadius: "30px", border: "none", boxShadow: "none"}}>
            <Typography 
              variant="h6"
              style={{fontFamily: "Grotesk", paddingBottom: "10px", fontSize:"16px"}}
            >
              {props.name}
            </Typography>
            <CardMedia
              component="img"
              height="140"
              style={{borderRadius: "30px", marginBottom: "10px"}}
              image={props.imageURL}
            />

          {props && props.tags && props.tags.map( (tag) => 
              <Chip 
                label={tag.label} 
                variant="outlined" 
                size="small" 
                key={tag.label}
                style={{margin: "5px", marginTop: "15px", border: "1px solid green", color: "green"}}/>
            )}

            <Accordion 
              expanded={expanded === 'panel' + props.name}
              onChange={handleChange('panel' + props.name )} 
              style={{marginTop: '10px'}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
              <Typography variant="subtitle1">Ingrédients</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Ingredient
                    list={props.ingredients}
                  />
              </AccordionDetails>
            </Accordion>

            <Accordion 
              expanded={expanded === 'panel2' + props.name } 
              onChange={handleChange('panel2' + props.name)}
              key={props.name}
              style={{marginTop: '10px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header">
              <Typography  variant="subtitle1">Étapes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <Stack spacing={1}>
                    <Step
                      list={props.steps}
                    />
                  </Stack>
              </AccordionDetails>
            </Accordion>
        </Card>
    </>
  );
};
