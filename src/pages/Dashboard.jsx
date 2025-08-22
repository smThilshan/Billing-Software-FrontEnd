import React from "react";
import ItemCard from "../components/ItemCard";
import { FaApple, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import CustomTable from "../components/CustomTable";

const Dashboard = () => {
  const columns = [
    { header: "Order ID", accessor: "orderId" },
    { header: "Customer", accessor: "customer" },
    { header: "Amount", accessor: "amount" },
    { header: "Payment", accessor: "payment" },
    { header: "Status", accessor: "status" },
    { header: "Time", accessor: "time" },
  ];

  const data = [
    {
      orderId: "ORD-1001",
      customer: "John Doe",
      amount: "$250",
      payment: "Credit Card",
      status: "Paid",
      time: "10:30 AM",
    },
    {
      orderId: "ORD-1002",
      customer: "Jane Smith",
      amount: "$180",
      payment: "Cash",
      status: "Pending",
      time: "11:00 AM",
    },
    {
      orderId: "ORD-1003",
      customer: "Mike Johnson",
      amount: "$320",
      payment: "PayPal",
      status: "Failed",
      time: "01:15 PM",
    },
  ];


  return (
    <div className="p-4">
      <div className=" md:p-8 flex gap-4">
        <div className="flex-1">
          <ItemCard
            icon={<FaDollarSign size={50} color="#90ee90" />}
            title="Today's Sales"
            text="$1.20"
          />
        </div>
        <div className="flex-1">
          <ItemCard
            icon={<FaShoppingCart size={50} color="#90ee90" />}
            title="Today's Orders"
            text="3827"
          />
        </div>
      </div>
      <div className="md:px-4 md:pb-8 px-4 pb-4">
        <CustomTable columns={columns} data={data} title={"Recent Orders"}/>
      </div>
    </div>
  );
};

export default Dashboard;
