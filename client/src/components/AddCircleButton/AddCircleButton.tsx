import React from 'react';
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useMutation, useQueryClient} from "react-query";
import {createCircle, getRandomColor} from "functions";

interface ICreatedCircle{
    color: string,
    text: string,
    position: number,
}

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
    const queryClient = useQueryClient();
    const addCircleMutation = useMutation(({color, text, position}:ICreatedCircle) => createCircle({ color, text, position }), {
        onSuccess: () => {
            queryClient.invalidateQueries('circles')
        },
    });

    const handleAddCircle = () => {
        addCircleMutation.mutate({color: getRandomColor(), text: 'lorem ipsum', position: 3})
    }

    return (
        <Button className={classes.button} onClick={handleAddCircle}>
            <AddCircleIcon />
        </Button>
    );
};

export default AddCircleButton;
