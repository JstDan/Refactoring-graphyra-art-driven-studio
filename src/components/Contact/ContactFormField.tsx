import TextField, { TextFieldProps } from "@mui/material/TextField";

type ContactFormFieldProps = TextFieldProps;

const ContactFormField = (props: ContactFormFieldProps) => {
  return (
    <TextField
      variant="standard"
      fullWidth
      InputLabelProps={{
        sx: {
          color: "#DFD9D3",
          "&.Mui-focused": {
            color: "#C45E2C",
          },
        },
      }}
      sx={{
        "& .MuiInputBase-root": {
          color: "inherit",
          fontSize: "1.125rem",
          paddingTop: "1rem",
        },
        "& .MuiInput-underline:before": {
          borderBottomColor: "#DFD9D3",
          borderBottomWidth: "1px",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "#DFD9D3",
          borderBottomWidth: "1px",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#C45E2C",
          borderBottomWidth: "1px",
        },
      }}
      {...props}
    />
  );
};

export default ContactFormField;
