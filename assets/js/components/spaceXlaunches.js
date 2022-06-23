import { lighten } from '@material-ui/core';
import { identity } from 'lodash';
import React, { useState } from 'react';

function SpaceXlaunches() {
    const [launches, setLaunches] = useState([]);
    const LAUNCH_QUERY = `
    {
        launchesPast(limit:10){
            id
            mission_name
        }
    }
    `

    React.useEffect(() => {
        fetch(`https://api.spacex.land/graphql/`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({query: LAUNCH_QUERY})
        }).then(response => response.json())
        .then(data =>setLaunches(data.data.launchesPast)) 
    },[]);

    return (
        <div className='spacexLaunch'>
            <h1>List of spaceX missions</h1>
            <ul>
            {launches.map(launch => (
                <li key={launch.id}>{launch.mission_name}</li>
            ))}
            </ul>
        </div>
    );
}

export default SpaceXlaunches;