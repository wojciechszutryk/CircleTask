import React from 'react';
import {makeStyles} from "@mui/styles";
import {Box} from "@mui/material";

interface muiProps{
    color: string
}

const useStyles = makeStyles({
    circle: {
        backgroundColor: (props:muiProps) => props.color,
        color: "#fff",
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: '50%',
        textAlign: "center",
        lineHeight: '100px',
    },
});

const Circle = ({text, color}: {text: string, color: string}) => {
    console.log(color)
    const classes = useStyles({color});
    return (
        <Box className={classes.circle}>
            {text}
        </Box>
    );
};

export default Circle;
