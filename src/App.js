import {useEffect, useState} from "react";
import UserData from "./components/UserData.jsx";
import Datepicker from "./components/Datepicker.jsx";
import SearchBar from "./components/SearchBar.jsx";
import SearchBar2 from "./components/SearchBar2.jsx";
// import { SearchBar } from "./components/SearchBar";
// import { SearchResultsList } from "./components/SearchResultsList";

const API = "https://jsonplaceholder.typicode.com/users";
//---remove hardcoding
const jsonData = [
    {
        "name": "",
        "pbId": "12",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:00:46",
        "date": "2024-03-17"
    },
    {
        "name": " vxx",
        "pbId": "546",
        "reffId": null,
        "designation": "cxvxv",
        "division": "xxx",
        "phoneNo": "56232",
        "programCode": "5455",
        "time": "13:03:26",
        "date": "2024-03-17"
    },
    {
        "name": "CHIRAG",
        "pbId": "753",
        "reffId": null,
        "designation": "dfvdGH",
        "division": "hgh",
        "phoneNo": "hghg",
        "programCode": "ghg",
        "time": "13:03:26",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "12",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "156",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "trinadh",
        "pbId": "159",
        "reffId": null,
        "designation": "sdfsfJJH",
        "division": "JHJHJ",
        "phoneNo": "JHJH",
        "programCode": "JHJH",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "456",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "46119",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": " vxx",
        "pbId": "546",
        "reffId": null,
        "designation": "cxvxv",
        "division": "xxx",
        "phoneNo": "56232",
        "programCode": "56888",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "CHIRAG",
        "pbId": "753",
        "reffId": null,
        "designation": "dfvdGH",
        "division": "hgh",
        "phoneNo": "hghg",
        "programCode": "56888",
        "time": "13:04:21",
        "date": "2024-03-17"
    },
    {
        "name": "",
        "pbId": "sfsdds",
        "reffId": null,
        "designation": "",
        "division": "",
        "phoneNo": "",
        "programCode": "56888",
        "time": "16:16:45",
        "date": "2024-03-17"
    },
    {
        "name": "Nishi Pal",
        "pbId": "46125-44",
        "reffId": null,
        "designation": "sgjdhj",
        "division": "1",
        "phoneNo": "8707700126",
        "programCode": "56888",
        "time": "19:00:10",
        "date": "2024-03-17"
    },
    {
        "name": "Nishi Pal",
        "pbId": "46125-44",
        "reffId": null,
        "designation": "sgjdhj",
        "division": "1",
        "phoneNo": "8707700126",
        "programCode": "56888",
        "time": "19:00:49",
        "date": "2024-03-17"
    }
    // Add the rest of your JSON data here
];
///remove hardcoding
const App = () => {
    const [selectedProgramCode, setSelectedProgramCode] = useState('');
    const handleSelectProgramCode = (programCode) => {
        console.log("Program Code",programCode);
        setSelectedProgramCode(programCode);
      };
    const [users, setUsers] = useState([]);
    const [results, setResults] = useState([]);
    //--uncomment
    // const fetchUsers = async (url) => {
    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         if (data.length > 0) {
    //             setUsers(data);
    //         }
    //         console.log(data);
    //     } catch (e) {
    //         console.error(e)
    //     }
    // }


    // useEffect(() => {
    //     fetchUsers(API);
    // }, [])
    //uncomment
    useEffect(() => {
        setUsers(jsonData);
    }, []);
    return <>
    <div className="container">
   <h1 className="headstyling">SMART ATTENDANCE SYSTEM</h1>
   <div className="row">
   <label htmlFor="searchbar2" className="label-style">Select Program Code:</label>
   <SearchBar2 id="searchbar2" onSelectProgramCode={handleSelectProgramCode}/>
   </div>
   <div className="row">
    <div className="row">
   <label htmlFor="datepicker" className="label-style">Select Date:</label>
   <Datepicker id="datepicker"/>
   </div>
   <div className="row">
   <label htmlFor="searchbar" className="label-style">Select Pbno:</label>
                <SearchBar id="searchbar"/>
                </div>
            </div>
        {selectedProgramCode &&(<table>
            <thead>
            <tr>
                <th>PB No.</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Division</th>
                <th>Phone-No</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users} programC={selectedProgramCode}/>
            </tbody>
        </table>)}
        </div>
    </>
}

export default App;
