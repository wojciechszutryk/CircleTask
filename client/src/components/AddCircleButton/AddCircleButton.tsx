import React, {useCallback} from 'react';
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
    icon: {
        color: 'green',
        width: 50,
        height: 50
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

    const handleAddCircle = useCallback(() => {
        addCircleMutation.mutate({color: getRandomColor(), text: 'lorem ipsum', position: 3})
    },[addCircleMutation])

    return (
        <Button  onClick={handleAddCircle}>
            <AddCircleIcon className={classes.icon}/>
        </Button>
    );
};

export default AddCircleButton;
