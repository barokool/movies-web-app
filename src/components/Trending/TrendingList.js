import React from 'react'
import './trending-list.css'
import Badge from '@material-ui/core/Badge';
import { img_300, unavailable } from '../../config/config'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));
const TrendingList = (props) => {
    const classes = useStyles();

    return (
        <div className="py-4 ">
            <Badge style={{ top: '10px', right: '-90px', left: '0', bottom: "0" }} badgeContent={props.vote_average} color={props.vote_average > 7 ? "primary" : "secondary"}></Badge>
            <div className="` poster-bg hover:bg-white  rounded-xl min-h-full w-60 flex flex-col relative	 justify-center items-center pb-4">
                {
                    props.poster ? <img src={`${img_300}${props.poster}`} alt="pic" /> : <img src={unavailable} alt="pic" />
                }
                <b className="pt-2 text-center">{props.title}</b>
                <div className=" font-bold ">
                    <span>{props.release_date}</span>
                </div>

            </div >
        </div>

    )
}

export default TrendingList
