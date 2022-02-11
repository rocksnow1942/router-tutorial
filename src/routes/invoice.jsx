import { useParams, useNavigate } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
    const params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId,10));
    let navigate = useNavigate();

    return (<> <h2> Total Due: {invoice.amount} </h2>
    <p>Invoice: {invoice.name}: {invoice.number}</p>
    <p>Due Date: {invoice.due}</p>    
    <p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate('/invoices')
        }}
      >Delete</button>
    </p>
    </>)
  }
