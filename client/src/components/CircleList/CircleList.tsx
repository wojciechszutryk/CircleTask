import React, {useMemo} from 'react';
import {useQuery} from "react-query";
import {fetchCircles} from "../../functions";
import {Circle} from "components";
import {Box} from "@mui/material";
import {ClipLoader} from "react-spinners";

interface ICircle{
    id: string,
    color: string,
    text: string,
    position: number,
}

const CircleList = () => {
    const { data: circles, isFetching } = useQuery(
        ['circles'],
        () => fetchCircles()
    )

    const circlesList = useMemo(() => {
        if( circles) return circles.map((circle: ICircle) => (
            <Circle key={circle.id} color={circle.color} text={circle.text}/>
        ))
    },[circles]);

    return (
        isFetching ?
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <ClipLoader size={150} />
        </Box>
            :
        <div>
            {circlesList}
        </div>
    );
};

export default CircleList;
