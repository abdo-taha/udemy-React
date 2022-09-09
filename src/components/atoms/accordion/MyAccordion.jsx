import Accordion from "@mui/material/Accordion";

const MyAccordion = ({ children, handleChange, expanded }) => {
  // console.log(expanded);
  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        boxShadow: "none",
      }}
    >
      {children}
    </Accordion>
  );
};

export default MyAccordion;
