import { useEffect, useState } from "react";
import dateFormat from "dateformat";
import axios from "axios";
import UserData from "./components/UserData.jsx";
import Datepicker from "./components/Datepicker.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchBar2 from "./components/SearchBar2.jsx";
import ExportToExcelButton from './components/ExportToExcelButton.js';

const API = "http://192.168.2.119:8090/hal-hma-attendance/getDataByFilter";

const App = () => {
    const [selectedProgramCode, setSelectedProgramCode] = useState('');
    const [sysdate,setsysdate]=useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleSelectProgramCode = (programCode) => {
        console.log("Program Code", programCode);
        setSelectedProgramCode(programCode);
    };

    const handleDateChange = (newDate) => {
        // const formattedDate = newDate.toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });
         const formattedDate=dateFormat(newDate, "isoDate")
        console.log("Selected Date", formattedDate);
        setSelectedDate(formattedDate);
    };
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const now = new Date();
        const formattedDate2=dateFormat(now, "isoDate");
        setsysdate(formattedDate2);
        console.log("Systemdate",formattedDate2);
        axios
        .post(
          "http://192.168.2.119:8090/hal-hma-attendance/getDataByFilter",
          {
            
                pbId:"",
                date:"2024-03-18",
                programCode:""
            
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
  
        .then((res) => {
            setUsers(res.data);
        });

    }, []); // Empty dependency array to fetch data only once on component mount

    return (
        <div className="container">
            <h1 className="headstyling">SMART ATTENDANCE SYSTEM</h1>
            <div className="row">
                <label htmlFor="searchbar2" className="label-style">Select Program Code:</label>
                <SearchBar2 id="searchbar2" onSelectProgramCode={handleSelectProgramCode} />
            </div>
            <div className="row">
                <div className="row">
                    <label htmlFor="datepicker" className="label-style">Select Date:</label>
                    <Datepicker id="datepicker" onDateChange={handleDateChange}/>
                </div>
                <div className="row">
                    <label htmlFor="searchbar" className="label-style">Select Pbno:</label>
                    <SearchBar id="searchbar" />
                </div>
            </div>
            {/* {selectedProgramCode && ( */}
                <table>
                    <thead>
                        <tr>
                            <th>PB No.</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>PB-No</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <UserData users={users} programC={selectedProgramCode} />
                    </tbody>
                </table>
            {/* )} */}
            <ExportToExcelButton data={users} fileName="example.csv" />
        </div>

    );
};

export default App;
