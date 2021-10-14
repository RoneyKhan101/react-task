import React from 'react'

export const View = ({patients, setPatients, setInitialValues}) => {
    const getIndex = (index, length) => (length - index) - 1

    const deleteItem = (index) => {
        const prevData = JSON.parse(localStorage.getItem('patients'));
        if (prevData) prevData.splice(index, 1)
        localStorage.setItem('patients', JSON.stringify(prevData));
        setPatients(prevData);
    }

    const editItem = (values, index) => {
        setInitialValues(values)
        deleteItem(index)
    }

    return patients.slice(0).reverse().map((patient, index) => (
        <tr key={index}>
            <td>{patient.patientName}</td>
            <td>{(new Date(patient.procedureTime)).toDateString()}</td>
            <td>{(new Date(patient.procedureTime)).toLocaleTimeString()}</td>
            <td>{patient.consentFor}</td>
            <td>{patient.facility}</td>
            <td>{patient.details}</td>
            <td>
                <button className="btn btn-sm btn-info minimum-mr" onClick={() => editItem(patient, getIndex(index, patients.length))}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteItem(getIndex(index, patients.length))}>Delete</button>
            </td>
        </tr>
    ))
}
