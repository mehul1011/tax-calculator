import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function CTC(props) {
  //   const salaryComponents = [{ ...props }];
  const [ctc, setCTC] = useState(parseInt(props.costToCompany)); // done
  const [range, setRange] = useState();
  const [basic, setBasic] = useState(parseInt(props.basicSalary)); // done
  const [epf, setEPF] = useState(basic * (12 / 100) + basic * (8 / 100)); // done
  const [dearNess, setDearNess] = useState(basic * (4 / 100));
  const [years, setYears] = useState(1);
  const [gratuity, setGratuity] = useState((ctc * 1.25) / ctc);
  // console.log(ctc, basic, dearNess, gratuity, range);
  const [gross, setGross] = useState(ctc - epf - gratuity);
  const [mediInsurance, setMediInsurance] = useState(600 * 12);
  // avg medical insurance from companies
  const [profTax, setProfTax] = useState(2400);
  const [hra, setHRA] = useState(11000);
  const [taxable, setTaxable] = useState(0);
  const [inMetro, setInMetro] = useState(props.inMetro);
  const [inHand, setInhand] = useState(0);

  useEffect(() => {
    if (ctc > 250000 && ctc < 500000) {
      setRange(5);
    } else if (ctc > 500000 && ctc < 1000000) {
      setRange(10);
    } else {
      setRange(20);
    }
  }, []);

  //   const changeYear = (e) => {
  //     setYears(e.target.value);
  //   };

  const getSal = () => {
    setTaxable(parseInt(gross - epf - hra - (mediInsurance * range) / 100));
    setInhand(gross - taxable - profTax - mediInsurance);
  };
  return (
    <>
      <div className="container mt-5">
        <Form.Group className="mb-3">
          <Form.Label>CTC</Form.Label>
          <Form.Control placeholder={ctc} disabled />
        </Form.Group>
        {/* <Form.Group className="mb-3">
        <Form.Label>
          {`Years of Service (in **Number** (Default Fresher <= 1Yr`}))
        </Form.Label>
        <Form.Control placeholder={years} onChange={changeYear} />
      </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>Basic Salary</Form.Label>
          <Form.Control placeholder={basic} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Employee Provident Fund (EPF)</Form.Label>
          <Form.Control placeholder={epf} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Taxable Income</Form.Label>
          <Form.Control placeholder={taxable} disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>In Hand Salary</Form.Label>
          <Form.Control placeholder={inHand} disabled />
        </Form.Group>
      </div>
      <div>
        <Button className="mb-2" variant="primary" onClick={getSal}>
          Get In-hand & Taxable Salary
        </Button>
      </div>
    </>
  );
}
export default CTC;
