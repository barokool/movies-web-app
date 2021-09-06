import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TrendingList from './Trending/TrendingList';
const Trending = () => {
    const [content, setContent] = useState([])
    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data.results)
        setContent(data.results);
    };
    useEffect(() => {
        console.log(content)
        fetchTrending()
    }, [])
    return (
        <div>
            <h1 className="pt-20">Fuck you</h1>
            <div >
                {
                    content.map((item, index) => (
                        <TrendingList
                            key={index}
                            title={item.title || item.name}
                            poster={item.poster_path}
                            media_type={item.media_type}
                            release_date={item.release_date || item.first_air_date}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default Trending

