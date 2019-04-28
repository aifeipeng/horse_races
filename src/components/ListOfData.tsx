import React from 'react';
// @ts-ignore
import AccordionList from './AccordionList.tsx';

interface Data {
    races: [];
}
interface Race {
    number: string,
    name: string,
    startTime: string,
    starts: []
}



const ListOfData = (props: {betType: string, gameData: Data}) => {
    const { betType, gameData } = props
    const {races} = gameData
    return (
        <div className="App">
            {betType!=='' &&
                <p>
                    {`Game type: ${betType}`}
                </p>
            }
            {!!races && races.map((race: Race) => {
                return (<React.Fragment
                key={race.startTime}>
                    <p>
                        Number: {race.number}
                    </p>
                    <p>
                        Name: {race.name}
                    </p>
                    <p>
                        Start time: {race.startTime}
                    </p>
                    <AccordionList
                        starts={race.starts}
                    />
                </React.Fragment>)
            })}
        </div>
    );
}


export default ListOfData;
