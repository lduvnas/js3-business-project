import React from "react";
import CreateCustomerForm from "../components/CreateCustomerForm";
import CustomerList from "../components/CustomerList";
import ActiveUser from "../components/ActiveUser";

export default function HomePage() {
  return (
    <div>
      <div className="container">
        <ActiveUser />
        <CustomerList />

        <CreateCustomerForm />
      </div>
    </div>
  );
}
