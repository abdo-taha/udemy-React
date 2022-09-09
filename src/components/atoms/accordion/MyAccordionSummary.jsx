import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyAccordionSummary = ({ children }) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon sx={{ margin: "0 0.8rem" }} />}
      sx={{
        flexDirection: "row-reverse",
        border: "1px solid #d1d7dc",
        backgroundColor: "#f7f9fa",
        display: "flex",
        alignItems: "center",
      }}
    >
      {children}
    </AccordionSummary>
  );
};
export default MyAccordionSummary;
