import React from 'react';
import AccordionList from './AccordionList';


const ListOfData = (props) => {
    const { betType, gameData } = props
    console.log('gameData', gameData)
    return (
        <div className="App">
            {betType!=='' &&
                <p>
                    {`Game type: ${betType}`}
                </p>
            }
            {!!gameData.races && gameData.races.map(element => {
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
