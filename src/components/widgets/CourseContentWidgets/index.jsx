import { useState } from "react";
import Accordion from "./Accordion";
import { H2 } from "./styled";
import TotalInf from "./TotalInf";

const CourseAccordions = ({ data }) => {
  const [expanded, setExpanded] = useState({});
  const [expandAll, setExpandAll] = useState(true);

  const handleChange = (panel) => {
    console.log(expanded[panel]);
    setExpanded((old) => {
      const tmp = {
        ...old,
        [panel]: !old[panel],
      };
      return tmp;
    });
  };
  const toggle = () => {
    setExpandAll((oldExpandAll) => {
      for (let index = 0; index < data.sectionsCount; index++) {
        setExpanded((old) => {
          return {
            ...old,
            [index]: oldExpandAll,
          };
        });
      }
      return !oldExpandAll;
    });
  };

  return (
    <div>
      <H2>Course content</H2>
      <TotalInf
        sections={data.sectionsCount}
        lectures={data.lectures}
        hours={data.totalTime.hours}
        minutes={data.totalTime.minutes}
        expanded={expandAll}
        onclick={toggle}
      />

      {data.sections.map((item, i) => (
        <Accordion
          key={i}
          handleChange={() => handleChange(i)}
          expanded={expanded[i] !== undefined ? expanded[i] : false}
          title={item.title}
          lectures_count={item.lectures_count}
          minutes={item.time.minutes}
          hours={item.time.hours}
        >
          {item.items}
        </Accordion>
      ))}
    </div>
  );
};
export { CourseAccordions };
