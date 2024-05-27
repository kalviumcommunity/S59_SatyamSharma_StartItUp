import React from 'react';

function AboutPg() {
  return (
    <div className='w-screen h-screen'>
      <div className='bg-slate-300 text-black p-8'>
        <h1 className='text-3xl font-bold mb-4'>About Us</h1>
        
        <p className='mb-4'>
          Welcome to <strong>Start-It-Up</strong>!
        </p>

        <h2 className='text-2xl font-bold mb-2'>Our Vision</h2>
        <p className='mb-4'>
          At <strong>Start-It-Up</strong>, we believe in the power of ideas and the potential they hold to transform the world. Our vision is to create a thriving ecosystem where new businesses can flourish and grow with the support of a dedicated community of investors and enthusiasts.
        </p>

        <h2 className='text-2xl font-bold mb-2'>What We Offer</h2>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>For Startups:</strong> A platform to showcase your ideas to a broad audience, receive feedback, and attract investment.</li>
          <li><strong>For Investors:</strong> A curated selection of innovative business pitches, making it easier to discover and invest in promising startups.</li>
          <li><strong>For the General Public:</strong> A chance to explore a wide range of startup ideas, engage with the entrepreneurial community, and stay informed about the latest trends in the startup world.</li>
        </ul>

        <h2 className='text-2xl font-bold mb-2'>Our Journey</h2>
        <p className='mb-4'>
          Our journey began with a simple idea: to create a seamless and efficient platform that supports the startup ecosystem. Here’s a snapshot of our development timeline:
        </p>

        <h3 className='text-xl font-bold mb-2'>Initial Days:</h3>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Day 1:</strong> Ideation and finalization of the concept, thorough research, and documentation.</li>
          <li><strong>Day 2-3:</strong> Design phase, including creating low and high-fidelity designs for the homepage and login page.</li>
        </ul>

        <h3 className='text-xl font-bold mb-2'>Weekly Plan:</h3>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Week 1:</strong> Focused on design and setup, with low and high-fidelity designs for the homepage and login page, and initial setup for frontend development.</li>
          <li><strong>Week 2:</strong> Dedicated to frontend development, implementing designs, and developing user authentication and registration functionality.</li>
          <li><strong>Week 3:</strong> Backend development, setting up the MongoDB database, developing database schema, and implementing CRUD operations.</li>
          <li><strong>Week 4:</strong> Testing and deployment, performing unit and integration testing, deploying on Netlify and Render, and writing comprehensive documentation.</li>
        </ul>

        <h2 className='text-2xl font-bold mb-2'>Technologies We Use</h2>
        <ul className='list-disc list-inside mb-4'>
          <li><strong>Frontend Development:</strong> React.js</li>
          <li><strong>Backend Development:</strong> Node.js with Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Deployment:</strong> Netlify (Frontend), Render (Backend)</li>
          <li><strong>Version Control:</strong> Git</li>
        </ul>

        <p className='mb-4'>
          Our server is live on Render, ensuring robust and scalable backend support for our platform.
        </p>

        <h2 className='text-2xl font-bold mb-2'>Join Us</h2>
        <p className='mb-4'>
          Whether you're a startup looking to get noticed, an investor seeking the next big opportunity, or an individual passionate about innovation, <strong>Start-It-Up</strong> welcomes you to be a part of our vibrant community. Together, let's shape the future of entrepreneurship.
        </p>

        <p className='mb-4'>
          Explore. Invest. Innovate.
        </p>

        <p className='mb-4'>
          <strong>Deployed Link:</strong> <a href='#' className='text-blue-500 underline'>Start-It-Up</a>
        </p>

        <p>
          Feel free to reach out to us for more information, support, or any queries you may have. We are here to help and support your entrepreneurial journey.
        </p>
      </div>
    </div>
  );
}

export default AboutPg;
