import React from 'react';
import Search from '../components/Search';
import MostVisited from '../components/MostVisited';
import RecentVisited from '../components/RecentVisited';

export default function Home() {
    return (
        <React.Fragment>
            <Search/>
            <MostVisited />
            <RecentVisited />
        </React.Fragment>
    );
}


