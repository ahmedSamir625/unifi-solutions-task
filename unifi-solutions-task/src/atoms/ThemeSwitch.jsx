import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/reducers/themeSlice";

export default function ThemeSwitch() {
  const dispatch = useDispatch();
  return (
    <FormGroup>
      <FormControlLabel
        onChange={(e) => {
          dispatch(toggleTheme(e.target.checked));
          document.querySelector('body').classList.toggle('bg-gray-700')
        }}
        className="text-white"
        control={<Switch />}
        label="Dark"
      />
    </FormGroup>
  );
}
