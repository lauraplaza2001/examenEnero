import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = ({ children, color, disabled, size, sx, onClick }) => {
    return (
        <Button
            variant="contained"
            color={color}
            disabled={disabled}
            size={size}
            sx={sx}
           
            onClick={onClick}
            
        >
            {children}
        </Button>
    )
}

export default CommonButton
