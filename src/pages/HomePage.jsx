import React from "react";
import CreateCustomerForm from "../components/CreateCustomerForm";
import CustomerList from "../components/CustomerList";
import Navbar from "../components/Navbar";
/* import SideBar from "../components/SideBar"; */

export default function HomePage() {
  return (
    <div>
      <Navbar />
      {/*      <SideBar /> */}

      <div className="container">
        <CustomerList />

        <CreateCustomerForm />
      </div>
    </div>
  );
}
