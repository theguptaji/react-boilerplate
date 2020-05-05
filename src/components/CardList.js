import React from 'react'
import Card from './Card'

export default function CardList({Robots}) {

    return (
        <div>
            {
                Robots.map(
                    (user, i) => {
                        return (
                        <Card 
                            key={i} 
                            name={Robots[i].name} 
                            email={Robots[i].email}
                        />
                        );
                    }
                )
            }
        </div>
    )
}
