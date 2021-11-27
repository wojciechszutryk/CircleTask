import React, {useCallback} from 'react';
import {makeStyles} from "@mui/styles";
import {Button} from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useMutation, useQueryClient} from "react-query";
import {deleteCircle} from "functions";

const useStyles = makeStyles({
    icon: {
        color: 'red',
        width: 50,
        height: 50
    },
});

const DeleteCircleButton = ({lastCircleId}:{lastCircleId: string}) => {
    const classes = useStyles();
    const queryClient = useQueryClient();
    const deleteCircleMutation = useMutation((id: string) => deleteCircle({id}), {
        onSuccess: () => {
            queryClient.invalidateQueries('circles')
        },
    });

    const handleRemoveCircle = useCallback((id) => {
        deleteCircleMutation.mutate(id);
    },[deleteCircleMutation])

    return (
        <Button onClick={() => handleRemoveCircle(lastCircleId)}>
            <RemoveCircleIcon className={classes.icon} />
        </Button>
    );
};

export default DeleteCircleButton;
