import React, {useMemo} from 'react';
import {useQuery} from "react-query";
import {fetchCircles} from "../../functions";
import {AddCircleButton, Circle, DeleteCircleButton} from "components";
import {Box} from "@mui/material";
import {ClipLoader} from "react-spinners";
import {makeStyles} from "@mui/styles";

interface ICircle{
    id: string,
    color: string,
    text: string,
    position: number,
}

const useStyles = makeStyles({
    buttonsWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    circlesWrapper: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
});

const CircleList = () => {
    const classes = useStyles();
    const { data: circles, isFetching } = useQuery(
        ['circles'],
        () => fetchCircles()
    )

    const circlesList = useMemo(() => {
        if( circles) return circles.map((circle: ICircle) => (
            <Circle key={circle.id} color={circle.color} text={circle.text}/>
        ))
    },[circles]);

    if(isFetching) return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <ClipLoader size={150} />
        </Box>
    )
    if(!circles || circles.length <= 0) return (
        <Box className={classes.circlesWrapper}>
            <AddCircleButton newCirclePosition={0}/>
        </Box>
    )

    return (
        <div>
            <Box className={classes.circlesWrapper}>
                <AddCircleButton newCirclePosition={circles.length}/>
                <DeleteCircleButton lastCircleId={circles.at(-1).id}/>
            </Box>
            <Box className={classes.circlesWrapper}>
                {circlesList}
            </Box>
        </div>
    );
};

export default CircleList;
