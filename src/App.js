import './App.css';
import React, {useEffect, useState} from "react";
import NewPost from "./containers/newPost";
import {View} from "./components/view";

function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const prevData = JSON.parse(localStorage.getItem('patients'));
    if (prevData) setPatients(prevData)
  }, [])

  const setLocalStorage = (values) => {
    const prevData = JSON.parse(localStorage.getItem('patients'));
    if (prevData && prevData.length > 2) prevData.splice(0, 1)
    localStorage.setItem('patients', JSON.stringify(prevData ? [...prevData, values] : [values]));
  }

  const handleAddBookSubmit = (values, resetForm) => {
    if (patients && patients.length > 2) patients.splice(0, 1)
    setPatients([...patients, values]);
    setLocalStorage(values);
    resetForm()
  }

  return (
      <div className="container wrapper">
        <h1>Sample Patient Registration</h1>
        <div className="main">
          <div className="col-md-12">
            <NewPost data={{submitForm: handleAddBookSubmit}}/>
          </div>
        </div>

        <div className="container col-md-12">
          {patients.length ?
              <>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Procedure Date</th>
                      <th>Procedure Time</th>
                      <th>Consent For</th>
                      <th>Faculty</th>
                      <th>Details/Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <View patients={patients}/>
                    </tbody>
                  </table>
                </div>
                <button
                    className="btn btn-danger btn-md"
                    type="button"
                    onClick={() => {
                      setPatients([]);
                      localStorage.setItem("patients", JSON.stringify([]))
                    }}
                >
                  Remove All
                </button>
              </>
              : ''
          }
        </div>
      </div>
  )
}

export default App;
