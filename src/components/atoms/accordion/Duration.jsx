import Typography from "@mui/material/Typography";

const Duration = ({ children }) => {
  return (
    <Typography
      sx={{
        alignSelf: "center",
        marginLeft: "auto",
        marginRight: "1.6rem",
        fontWeight: "400",
        lineHeight: "1.4",
        fontSize: "1.4rem",
      }}
    >
      {children}
    </Typography>
  );
};

export default Duration;
