import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function Btn({ btnName = "click here" }) {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#DB4444"),
        backgroundColor: "#DB4444",
        '&:hover': {
            backgroundColor: "#DB4444",
        },
    }));
    return (
        <ColorButton variant="contained" size='large'>{btnName}</ColorButton>
    )
}

export default Btn