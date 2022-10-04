import React from "react";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionBody from "../components/Accordion/AccordionBody";
import FAQData from "../data/faqs.json";

/*---> Component <---*/
const AccordionCompound = () => {
  return (
    <>
      <AccordionWrapper>
        <AccordionTitle>Preguntas Frecuentes</AccordionTitle>
        {FAQData.map((item) => (
          <AccordionItem key={item.id}>
            <AccordionHeader>{item.header}</AccordionHeader>
            <AccordionBody>{item.body}</AccordionBody>
          </AccordionItem>
        ))}
      </AccordionWrapper>
    </>
  );
};

export default AccordionCompound;
