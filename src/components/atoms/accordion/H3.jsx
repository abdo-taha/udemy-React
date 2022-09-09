import Typography from "@mui/material/Typography";

const H3 = ({ children }) => {
  return (
    <Typography
      sx={{
        fontWeight: "700",
        lineHeight: "1.2",
        letterSpacing: "-0.02rem",
        fontSize: "1.6rem",
        maxWidth: "60rem",
      }}
    >
      {children}
    </Typography>
  );
};

export default H3;
