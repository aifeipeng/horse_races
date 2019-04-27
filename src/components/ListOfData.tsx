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
    console.log('gameData', gameData)
    return (
        <div className="App">
            {betType!=='' &&
                <p>
                    {`Game type: ${betType}`}
                </p>
            }
            {!!races && races.map((element: Race) => {
                return (<React.Fragment>
                    <p>
                        Number: {element.number}
                    </p>
                    <p>
                        Name: {element.name}
                    </p>
                    <p>
                        Start time: {element.startTime}
                    </p>
                    <AccordionList
                        starts={element.starts}
                    />
                </React.Fragment>)
            })}
        </div>
    );
}


export default ListOfData;
