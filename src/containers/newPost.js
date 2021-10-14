import React, {useState} from "react";
import {ErrorMessage, Field, Formik} from "formik";
import CreatableSelect from 'react-select/creatable';
import Validators from "../validations";

const NewPost = (props) => {
    const {data, initialValues} = props;

    const [consents, setConsents] = useState([
        {label: 'Surgery', value: 'Surgery'},
        {label: 'Physical Exam', value: 'Physical Exam'},
        {label: 'Consultation', value: 'Consultation'},
        {label: 'Injury', value: 'Injury'},
    ]);

    const [facility, setFacility] = useState([
        {label: 'Acme, Med Corp', value: 'Acme, Med Corp'},
        {label: 'Sample Surgical', value: 'Sample Surgical'},
        {label: 'Choice Clinic', value: 'Choice Clinic'},
        {label: 'Example Hospital', value: 'Example Hospital'},
    ]);

    return (
        <>
            <Formik enableReinitialize={true} initialValues={initialValues} onSubmit={(value, {resetForm}) => data.submitForm(value, resetForm)}>
                {(formik) => {
                    const {handleSubmit, setFieldValue, values} = formik;
                    return (
                        <div className="">
                            <form onSubmit={handleSubmit}>
                                <div className="cart-body">
                                    <div className="cart-container">
                                        <h3>Patient Registration</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="patientName">Patient Name</label>
                                                    <Field
                                                        type="text"
                                                        name="patientName"
                                                        className="form-control"
                                                        validate={(event) => Validators.customFieldLevelValidation(event, [Validators.required, Validators.onlyCharacters, Validators.invalidChar])}
                                                    />
                                                    <ErrorMessage name="patientName" render={msg => <div
                                                        className="text-danger">{msg}</div>}/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="procedureDate">Procedure Time</label>
                                                    <Field
                                                        type="datetime-local"
                                                        name="procedureTime"
                                                        className="form-control"
                                                        validate={Validators.required}
                                                    />
                                                    <ErrorMessage name="procedureTime" render={msg => <div
                                                        className="text-danger">{msg}</div>}/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="details">Details</label>
                                                    <Field
                                                        type="text"
                                                        name="details"
                                                        className="form-control"
                                                        validate={Validators.required}
                                                    />
                                                    <ErrorMessage name="details" render={msg => <div
                                                        className="text-danger">{msg}</div>}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="consentFor">Consent For</label>
                                                    <Field
                                                        name="consentFor"
                                                        className="form-control"
                                                        validate={Validators.required}
                                                        render={() => (
                                                            <CreatableSelect
                                                                isClearable
                                                                value={{label: values.consentFor, value: values.consentFor}}
                                                                onChange={(e) => setFieldValue("consentFor", e?.value ? e.value : "")}
                                                                options={consents}
                                                            />
                                                        )}
                                                     />
                                                    <ErrorMessage
                                                        name="consentFor"
                                                        render={msg => <div className="text-danger">{msg}</div>}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="facility">Facility</label>
                                                    <Field
                                                        name="facility"
                                                        className="form-control"
                                                        validate={Validators.required}
                                                        render={() => (
                                                            <CreatableSelect
                                                                isClearable
                                                                value={{label: values.facility, value: values.facility}}
                                                                onChange={(e) => setFieldValue("facility", e?.value ? e.value : "")}
                                                                options={facility}
                                                            />
                                                        )}
                                                    />
                                                    <ErrorMessage
                                                        name="facility"
                                                        render={msg => <div className="text-danger">{msg}</div>}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            type="reset"
                                            onClick={e => formik.resetForm()}
                                            className="btn btn-warning minimum-mr"
                                        >
                                            Clear
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary minimum-mr"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Formik>
        </>
    );
};

export default NewPost;
