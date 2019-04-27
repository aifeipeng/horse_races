import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionList = (props) => {
    const { starts } = props

    return (
        <Accordion
            allowZeroExpanded={true}>
            {!!starts && starts.map(start => {
                return <AccordionItem
                    key={start.number}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <p>
                                {`Number: ${start.number}`}
                            </p>
                            <p>
                                {`Horse: ${start.horse.name}`}
                            </p>
                            <p>
                                {`Driver: ${start.driver.firstName} ${start.driver.lastName}`}
                            </p>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {`Trainer: ${start.horse.trainer.firstName} ${start.horse.trainer.lastName}`}
                        </p>
                        <p>
                            {`Horses father: ${start.horse.pedigree.father.name}`}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            })}
        </Accordion>
    )
}


export default AccordionList
