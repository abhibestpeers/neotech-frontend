import { FC } from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
    variant?: "text" | "outlined" | "contained" | undefined;
    text: string;
  };

const Buttons: FC<ButtonProps> = ({ variant, text }) => {
return (
    <Button variant={variant}>{text}</Button>
)};

export default Buttons;