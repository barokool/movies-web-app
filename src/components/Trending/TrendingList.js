import React from 'react'
import { img_300, unavailable } from '../../config/config'
const TrendingList = (props) => {
    return (
        <div className="hover:bg:white hover:text-white w-80 flex flex-col relative	 justify-center items-center pb-20">
            {
                props.poster ? <img src={`${img_300}${props.poster}`} alt="pic" /> : <img src={unavailable} alt="pic" />
            }
            <b>{props.title}</b>
            <div className="flex justify-around	">
                {
                    props.media_type ? <span>{props.media_type}</span> : ''
                }
                {
                    props.release_date ? <span>{props.release_date}</span> : ''
                }
            </div>
        </div>
    )
}

export default TrendingList
