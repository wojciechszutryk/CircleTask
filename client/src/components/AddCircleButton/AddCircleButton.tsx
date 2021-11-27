import React from 'react';
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

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

const AddCircleButton = () => {
    const classes = useStyles();
    return (
        <Button className={classes.button}>
            <AddCircleIcon />
        </Button>
    );
};

export default AddCircleButton;
