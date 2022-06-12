import React from "react";
import "./invoice.css";
import logo from "./../img/logoWprimary.png";

const Invoice = () => {
  return (
    <div className="invoice-body">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-text">
          <p>Sample Business name Ltd reg no 1236456789</p>
          <p>123/1 sample street , - Sample address</p>
          <p>Sample city 1111111</p>
        </div>
      </div>
      <div className="heading">
        <h1> TAX INVOICE/STATEMENT</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and t <br />{" "}
          ypesetting industry. Lorem Ipsum ha
        </p>
      </div>
      <div className="retain-body">
        <div className="retain-left">
          <p>
            Lorem Ipsum is simply dummy text <br />
            of the printing and <br />
            typesetting industry.
          </p>
        </div>
        <div className="retain-right">
          <p>RETAIN THIS STATEMENT FOR TAXATION PURPOSES</p>
          <div className="retain-box">
            <div className="retain-box-left">
              <p>Account No</p>
              <p>1111 1261 0202 1234</p>
            </div>
            <div className="retain-box-right">
              <p>Statement Date</p>
              <p>22/07/2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="invoice-address">
        <div className="address-left">
          <p>Street King William, 123</p>
          <p>Level 2, C, 442456</p>
          <p>San Francisco, CA, USA</p>
        </div>
        <div className="address-right">
          <h6>A Sample heading</h6>
          <p>
            Contact your sample team for <br />
            enquiries, products & services.
          </p>
          <p>Account Enquiries - Ph: (01) 1234 1234</p>
          <p>Your account manager is Sample</p>
          <p>Phone: 0 1234 1324</p>
        </div>
      </div>
      <div className="customer-info">
        <div className="c-name">
          <p>Attn: Mr firstname Lastname</p>
        </div>
        <div className="c-cash">
          <p>Cash Due</p>
          <span>$ 108.90</span>
        </div>
      </div>
      <div className="transaction-summary">
        <div className="t-summary-left">
          <p>Summary of Transactions</p>
          <div className="t-summary-box-left">
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
           <br />
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
          <br />
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
            <br />
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
          </div>
        </div>
        <div className="t-summary-right">
          <p>funds available</p>
          <div className="t-summary-box-right">
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
            <p className="plus">Plus</p>
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
            <p className="plus">Less</p>
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
            <p className="plus">Equals</p>
            <div className="t-summary">
              <p>Trade Openeing Balance</p>
              <p>$5,576.66</p>
            </div>
          </div>
        </div>
      </div>
       <div className="reg-no">
           <p>Reg No 123456789876</p>
           <p>Invoice No: 204454 02419</p>
       </div>
       <div className="past-volume">
           <p>Past Volume</p>
           <p>2020: $973.50</p>
           <p>2021: $5,310.20</p>
           <p>2022: $0.00</p>
       </div>
       <div className="past-volume-2">
           <p>Date</p>
           <p>Authority Number</p>
           <p>Card  No</p>
           <p>Discription</p>
           <p>Sales</p>
           <p>Purcahses</p>
           <p>Other Fees</p>
           <p>Cash Fees</p>
       </div>
       <div className="reg-no-1">
           <p>OPENING CASH FEE BALANCE</p>
           <p>$108.90</p>
       </div>
       <div className="current-transactions">
           <p>CURRENT TRANSACTIONS:</p>
           <div className="current-transactions-box">
               <p>22/04/2022</p>
               <p>400540</p>
               <p>5</p>
               <p>Display Advertising</p>
               <p>0.00</p>
               <p>0.00</p>
               <p>0.00</p>
               <p>0.00</p>
              
           </div>
       </div>
       <div className="total">
           <div className="total-box">
           <p>22/04/2022</p>
           <p>SUBTOTAL</p>
           <p>0.00</p>
           <p>0.00</p>
           </div>
           <div className="total-box">
           <p>22/04/2022</p>
           <p>VAT</p>
           <p>$0.00</p>
           <p>$0.00</p>
           </div>
           <div className="total-box">
           <p>22/04/2022</p>
           <p>Debt Reserve Fund Charge</p>
           <p>0.00</p>
           <p>0.00</p>
           </div>
           <div className="total-box">
           <p>22/04/2022</p>
           <p>MONTH TOTAL (Including VAT)</p>
           <p>0.00</p>
           <p>0.00</p>
           </div>
           <div className="total-box">
           <p>22/04/2022</p>
           <p>SUBTOTAL</p>
           <p className="last"></p>
           <p>0.00</p>
           </div>
       </div>
    </div>
  );
};

export default Invoice;
