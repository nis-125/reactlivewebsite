import DatePicker from "react-datepicker";
import './SearchBar.css';
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
export default function Datepicker() {
  const [date, setDate] = useState(new Date());
  return (
    <div >
      <DatePicker
      className="input-field1"
       selected={date} onChange={(date) => setDate(date)} />
    </div>
  );
}