import React from 'react';
import { useSubscription, gql } from '@apollo/client';

const SUBSCRIPTION = gql`
  subscription {
    offerCreated {
      id
      userName
      discount
      emailId
    }
  }
`;

const SubscriptionExample = () => {
  const { data, loading, error } = useSubscription(SUBSCRIPTION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='flex w-screen h-screen justify-center items-center bg-black text-white'>
      <div className='bg-gray-800 p-4 rounded-lg shadow-lg'>
        <h2 className='text-xl mb-4'>Real-Time Offer Updates</h2>
        {data && data.offerCreated ? (
          <div>
            <p>New offer created:</p>
            <ul>
              <li>ID: {data.offerCreated.id}</li>
              <li>User Name: {data.offerCreated.userName}</li>
              <li>Discount: {data.offerCreated.discount}</li>
              <li>Email ID: {data.offerCreated.emailId}</li>
            </ul>
          </div>
        ) : (
          <p>Waiting for new offers...</p>
        )}
      </div>
    </div>
  );
};

export default SubscriptionExample;
