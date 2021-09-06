import React, { useEffect, useState } from 'react'
import { Container } from '@material-ui/core'

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
            <Container className="pt-12">
                <h1 className="pt-8 text-center text-white text-2xl md:text-4xl sm:text-3xl font-bold font-mono">Trending Movies</h1>
                <div className="pb-20 flex flex-wrap justify-around">
                    {
                        content.map((item, index) => (
                            <TrendingList
                                vote_average={item.vote_average}
                                key={index}
                                title={item.title || item.name}
                                poster={item.poster_path}
                                media_type={item.media_type}
                                release_date={item.release_date || item.first_air_date}
                            />
                        ))
                    }
                </div>

            </Container>


        </div>
    )
}

export default Trending

