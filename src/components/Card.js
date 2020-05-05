import React from 'react';

export default function Card({name, email}) {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${name}?100x100`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}