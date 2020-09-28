import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CustomerListContext } from "../contexts/CustomerListContext";
import styled from "styled-components";
import UserKit from "../data/UserKit";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Button from "./Button";

const ErrorMessage = styled.p`
  color: #ed4b4b;
`;

const schema = yup.object().shape({
  name: yup.string().required(),
  organisationNr: yup
    .number()
    .positive()
    .integer()
    .required("required"),
  vatNr: yup
    .string()
    .matches(/^[SE]{2}[0-9]{10}$/i, "Required and should be like SE1234567890")
    .required(),
  reference: yup.string().required(),
  paymentTerm: yup
    .number()
    .positive()
    .integer()
    .required(),
  website: yup
    .string()
    .url()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  phoneNumber: yup
    .number()
    .positive()
    .integer()
    .required()
});

export default function CreateCustomerFrom() {
  const userKit = new UserKit();
  const { setCustomerList } = useContext(CustomerListContext);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data, e) => {
    console.log(data);
    userKit.createCustomar(data).then(() => {
      userKit
        .getCustomerList()
        .then(res => res.json())
        .then(data => setCustomerList(data.results));
    });
    e.target.reset();
  };

  /*   function renderInput(index, placeholder, name, errorMsg) {
    return (
      <div key={index}>
        <label>
          {name}
          <input placeholder={placeholder} name={name} ref={register} />
          {errors.name && <ErrorMessage>{errorMsg}</ErrorMessage>}
        </label>
      </div>
    );
  }
  const inputObjects = [
    ["name", "name", "requird"],
    ["organisationNr", "organisationNr", "requird"],
    ["vatNr", "vatNr", "Required and should be like SE1234567890"],
    ["reference", "reference", "requird"],
    ["paymentTerm", "paymentTerm", "requird"],
    ["website", "website", "requird"],
    ["Email", "email", "requird"],
    ["Phone", "phone", "requird"]
  ]; */

  return (
    <div>
      <h3>Create new Customer</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*     {inputObjects.map((inputItem, index) => {
          return renderInput(index, inputItem[0], inputItem[1], inputItem[2]);
        })} */}

        <label>
          Name
          <input type="text" name="name" ref={register} />
          {errors.name && <ErrorMessage>Required</ErrorMessage>}
        </label>

        <label>
          Organisation Number
          <input type="text" name="organisationNr" ref={register} />
          {errors.organisationNr && <ErrorMessage>Required</ErrorMessage>}
        </label>

        <label>
          VAT-number
          <input type="text" name="vatNr" ref={register} />
          {errors.vatNr && (
            <ErrorMessage>
              Required and should be like SE1234567890
            </ErrorMessage>
          )}
        </label>

        <label>
          Reference
          <input type="text" name="reference" ref={register} />
          {errors.reference && <ErrorMessage>Required</ErrorMessage>}
        </label>

        <label>
          Payment Term
          <input type="text" name="paymentTerm" ref={register} />
          {errors.paymentTerm && <ErrorMessage>Required</ErrorMessage>}
        </label>

        <label>
          Website
          <input type="text" name="website" ref={register} />
          {errors.website && <ErrorMessage>Required</ErrorMessage>}
        </label>

        <label>
          Email
          <input type="text" name="email" ref={register} />
          {errors.email && <ErrorMessage>Required</ErrorMessage>}
        </label>

        <label>
          Phone number
          <input type="text" name="phoneNumber" ref={register} />
          {errors.phoneNumber && <ErrorMessage>Required</ErrorMessage>}
        </label>
        <Button type="submit" title="Create customer" />
      </form>
    </div>
  );
}
