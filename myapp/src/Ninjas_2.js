import React from 'react';

const Ninjas = ({ninjas}) => {
    // const ninjaList = ninjas.map(ninja => {
    //     return (
    //         <div className="ninja" key={ninja.id}>
    //             <div>Name: { ninja.name }</div>
    //             <div>Age: { ninja.age }</div>
    //             <div>Clan: { ninja.clan }</div>
    //         </div>
    //     );
    // });
    const ninjaList = ninjas.map(ninja => {
        return ninja.age > 16 ? (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Clan: { ninja.clan }</div>
            </div>
        ) : null;
    });
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
};

export default Ninjas;