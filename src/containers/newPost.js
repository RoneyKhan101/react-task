import React from "react";
import {ErrorMessage, Field, Formik} from "formik";
import Validators from "../validations";

const initialValues = {
    patientName: "",
    procedureTime: "",
    consentFor: "",
    facility: "",
    details: "",
};


const NewPost = (props) => {
    const {data} = props;

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(value, {resetForm}) => data.submitForm(value, resetForm)}>
                {(formik) => {
                    const {handleSubmit} = formik;
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
                                                        as="select"
                                                        name="consentFor"
                                                        className="form-control"
                                                        validate={Validators.required}
                                                    >
                                                        <option value="" label="Consent For"/>
                                                        <option value="Surgery" label="Surgery"/>
                                                        <option value="Physical Exam" label="Physical Exam"/>
                                                        <option value="Consultation" label="Consultation"/>
                                                        <option value="Injury" label="Injury"/>
                                                    </Field>
                                                    <ErrorMessage name="consentFor" render={msg => <div
                                                        className="text-danger">{msg}</div>}/>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="facility">Facility</label>
                                                    <Field
                                                        as="select"
                                                        name="facility"
                                                        className="form-control"
                                                        validate={Validators.required}
                                                    >
                                                        <option value="" label="Facility For"/>
                                                        <option value="Acme, Med Corp" label="Acme, Med Corp"/>
                                                        <option value="Sample Surgical" label="Sample Surgical"/>
                                                        <option value="Choice Clinic" label="Choice Clinic"/>
                                                        <option value="Example Hospital" label="Example Hospital"/>
                                                    </Field>
                                                    <ErrorMessage name="facility" render={msg => <div
                                                        className="text-danger">{msg}</div>}/>
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
