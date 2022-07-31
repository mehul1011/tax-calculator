import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./FormComponent.css";
import CTC from "./CTC";
// import { Calculation, salaryComponents } from "./Calculation";

const initialFormData = Object.freeze({
  costToCompany: "",
  basicSalary: "",
  inMetro: false,
});

const FormComponent = () => {
  const checkboxRef = React.useRef();
  const [FormData, updateFormData] = React.useState(initialFormData);
  const [show, updateShow] = React.useState(false);
  //   const [password, updatePassword] = React.useState("");
  const handleChange = (e) => {
    updateFormData({
      // spread inside this obj and append a new if already not there
      ...FormData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const validateNumberField = (costToCompany, basicSalary) => {
    const numberRegEx = /\-?\d*\.?\d{1,2}/;
    return (
      numberRegEx.test(String(costToCompany).toLowerCase()) &&
      numberRegEx.test(String(basicSalary).toLowerCase())
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      FormData.costToCompany === "" ||
      FormData.basicSalary === "" ||
      !validateNumberField(FormData.costToCompany, FormData.basicSalary)
    ) {
      alert("Enter Numbers Please");
      e.target.reset();
      return;
    }
    if (parseInt(FormData.costToCompany) < 250000) {
      alert("Salary Not taxable");
      e.target.reset();
      return;
    }
    updateShow(true);
    if (checkboxRef.current.checked) {
      updateFormData({ ...FormData, inMetro: true });
    }
    e.target.reset();
  };
  const toggleShow = (e) => {
    updateShow(false);
  };

  return (
    <div className="form-class container">
      <h4>Get your Salary Calculated</h4>
      {show === false && (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Enter your CTC:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cost to Company"
              name="costToCompany"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your Basis Salary:</Form.Label>
            <Form.Control
              type="text"
              placeholder="40% of gross income or 50% of an individual's CTC"
              name="basicSalary"
              onChange={handleChange}
            />
          </Form.Group>
          <div key={`${"metro"}`} className="mt-2 mb-3">
            <Form.Check
              ref={checkboxRef}
              type="checkbox"
              id={`${"metro"}`}
              label={`${"In Metro City?"}`}
            />
          </div>
          {/* <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit form
          </Button>
        </Form>
      )}

      {show && (
        <div>
          <CTC {...FormData} />
          <Button variant="primary" onClick={toggleShow}>
            Reset
          </Button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
