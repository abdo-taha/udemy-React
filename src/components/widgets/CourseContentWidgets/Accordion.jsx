import {
  Accordion,
  AccordionSummary,
  H3,
  Duration,
  AccordionDetails,
} from "../../atoms/accordion";
import PartInf from "./PartInf";

const MyAccordion = ({
  handleChange,
  expanded,
  title,
  children,
  lectures_count,
  minutes,
  hours,
}) => {
  const duration = `${lectures_count} lecture${lectures_count > 1 ? "s" : ""} • 
  ${hours ? hours + "h " : ""} ${minutes}min`;
  return (
    <div>
      <Accordion handleChange={handleChange} expanded={expanded}>
        <AccordionSummary>
          <H3>{title}</H3>
          <Duration>{duration}</Duration>
        </AccordionSummary>
        <AccordionDetails>
          {children.map((element, j) => (
            <PartInf
              key={j}
              title={element.title}
              hours={element.time.hours}
              minutes={element.time.minutes}
              link={element.can_be_previewed}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MyAccordion;
