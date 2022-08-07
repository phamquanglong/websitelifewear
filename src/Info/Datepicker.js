import { TextField } from "@mui/material";
// import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

let Datepicker = (props) => {
  let { value, setValue } = props;

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-row mx-5 mt-5 items-center">
      <p style={{ minWidth: 150 }}>Ngày sinh</p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDatePicker
          className="flex bg-red-400"
          label="Ngày sinh"
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Datepicker;
