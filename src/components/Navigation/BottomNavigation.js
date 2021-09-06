import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: '0',
        backgroundColor: 'black'
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const history = useHistory()
    const list = ["/", "/movies", "/tvseries", "/search"]
    useEffect(() => {
        list.map((item, index) => {
            if (value === index) {
                history.push(item)
            }
        })

    }, [value, history])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction style={{ color: 'white' }} label="Trending" icon={<WhatshotIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Movies" icon={<MovieIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label="TV Series" icon={<TvIcon />} />
            <BottomNavigationAction style={{ color: 'white' }} label="Search" icon={<SearchIcon />} />
        </BottomNavigation>
    );
}