import React from 'react'

export const View = ({patients}) => {
    return patients.slice(0).reverse().map((patient, index) => (
        <tr key={index}>
            <td>{patient.patientName}</td>
            <td>{(new Date(patient.procedureTime)).toDateString()}</td>
            <td>{(new Date(patient.procedureTime)).toLocaleTimeString()}</td>
            <td>{patient.consentFor}</td>
            <td>{patient.facility}</td>
            <td>{patient.details}</td>
        </tr>
    ))
}
