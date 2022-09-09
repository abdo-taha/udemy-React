import AccordionDetails from "@mui/material/AccordionDetails";

const MyAccordionDetails = ({ children }) => {
  return (
    <AccordionDetails
      sx={{
        border: "1px solid #d1d7dc",
        borderTop: "none",
        padding: "1.6rem 2.4rem",
      }}
    >
      {children}
    </AccordionDetails>
  );
};

export default MyAccordionDetails;
