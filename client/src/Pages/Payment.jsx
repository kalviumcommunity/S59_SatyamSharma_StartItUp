import React, { useState } from 'react';

const Payment = () => {
  const [popupContent, setPopupContent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const checkoutHandler = async (amount) => {
    try {
      if (typeof window.Razorpay === 'undefined') {
        throw new Error('Razorpay SDK not loaded');
      }

      const keyResponse = await fetch("http://localhost:1300/pay/getkey");
      if (!keyResponse.ok) {
        throw new Error(`HTTP error! status: ${keyResponse.status}`);
      }
      const { key } = await keyResponse.json();

      const orderResponse = await fetch("http://localhost:1300/pay/checkout", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      if (!orderResponse.ok) {
        throw new Error(`HTTP error! status: ${orderResponse.status}`);
      }
      const { order } = await orderResponse.json();

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Start It Up",
        description: "Satyam Sharma",
        image: "https://avatars.githubusercontent.com/u/138446502?v=4",
        order_id: order.id,
        callback_url: "http://localhost:1300/pay/paymentverification",
        prefill: {
          name: "Satyam Sharma",
          email: "satyamworks20@gmail.com",
          contact: "9882182880"
        },
        notes: {
          "address": "Start It Up (H.P)"
        },
        theme: {
          "color": "#121212"
        },
        handler: function (response) {
          fetch("http://localhost:1300/pay/paymentverification", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          })
          .then(async (res) => {
            const text = await res.text();
            try {
              const parser = new DOMParser();
              const doc = parser.parseFromString(text, 'text/html');
              const htmlContent = doc.body.innerHTML;
              setPopupContent(htmlContent);
              setShowPopup(true);
            } catch (err) {
              console.error("Unexpected response format:", text);
            }
          })
          .catch(err => console.error("Error in payment verification request:", err));
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error during checkout: ", error);
    }
  };

  const Card = ({ amount, img, checkoutHandler }) => {
    return (
      <div className="flex flex-col items-center">
        <img src={img} alt="Product" className="w-64 h-64 object-cover" />
        <p>₹{amount}</p>
        <button 
          onClick={() => checkoutHandler(amount)}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
        >
          Buy Now
        </button>
      </div>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Card amount={100} img={"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"} checkoutHandler={checkoutHandler} />
        <Card amount={1000} img={"https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D"} checkoutHandler={checkoutHandler} />
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <div dangerouslySetInnerHTML={{ __html: popupContent }} />
            <button onClick={() => setShowPopup(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Payment;
