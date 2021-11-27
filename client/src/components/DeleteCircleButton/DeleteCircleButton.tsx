import React from 'react';
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const useStyles = makeStyles({
    button: {
        color: "#fff",
        height: 100,
        width: 100,
        borderRadius: '50%',
        textAlign: "center",
        lineHeight: '100px',
    },
});

const DeleteCircleButton = () => {
    const classes = useStyles();
    return (
        <Button className={classes.button}>
            <RemoveCircleIcon />
        </Button>
    );
};

export default DeleteCircleButton;
