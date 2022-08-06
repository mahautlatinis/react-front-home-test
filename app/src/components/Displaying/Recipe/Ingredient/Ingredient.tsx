import {IngredientsProps } from "../../../../interfaces/Ingredient/Ingredient.interface";
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

export default function Ingredient(props: IngredientsProps)
{
  return (
    <>
    <AvatarGroup max={6}>
      {props.list.map((ingredient) => 
        <Avatar 
          key={ingredient.name} 
          src={ingredient.imgURL} 
          style={{border: "1px solid #f2f3f4"}}
        />)}
    </AvatarGroup>
    <Stack direction="row" spacing={1}>
      {props.list.map((ingredient) =>
        <span key={ingredient.name} style={{fontSize: "12px"}}>{ingredient.name} </span>)}
    </Stack>
    </>
  );
};
