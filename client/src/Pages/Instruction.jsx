import React from 'react'

function Instruction() {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Instructions for Founders on Publishing Content on Our Site</h1>
      <p className="mb-6">Welcome to our platform! We are excited to help you share your startup with the world and connect with potential investors. Follow these detailed steps to publish your content effectively:</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Step 1: Fill Out the Necessary Form</h2>
        <p className="mb-2">To get started, you need to provide the minimum required details about your startup. Please fill out the form with the following information:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Startup Name:</strong> The official name of your startup.</li>
          <li><strong>Description:</strong> A brief yet comprehensive description of what your startup does.</li>
          <li><strong>Google Drive Video Link:</strong> A link to a video that showcases your startup. Ensure the video is accessible via Google Drive.</li>
          <li><strong>Thumbnail:</strong> An eye-catching image that represents your video. This will be used as the thumbnail.</li>
        </ul>
        <p>Once you have completed this form, submit it to proceed.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Step 2: Add Additional Details About Your Startup</h2>
        <p className="mb-2">In this section, you can enrich your post with more information about your startup. Here’s what you should include:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Founder Details:</strong> Information about yourself and your team. This is an opportunity to share your background, expertise, and the story behind your startup.</li>
          <li><strong>Additional Descriptions:</strong> Any other relevant information that highlights your startup’s uniqueness and value proposition.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Step 3: Investment and Tokenization Process</h2>
        <p className="mb-2">This is the most crucial part if you’re looking to attract investment and tokenize your offering. Follow these steps:</p>
        <h3 className="text-xl font-semibold mb-1">Fill Out Investment Details:</h3>
        <p className="mb-2">Provide comprehensive details to attract investors, including:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Current Valuation:</strong> The latest valuation of your startup.</li>
          <li><strong>Equity Offered:</strong> The percentage of equity you are offering to investors.</li>
          <li><strong>Previous Investments:</strong> Information about any previous investments received.</li>
          <li><strong>Additional Information:</strong> Any other relevant financial details.</li>
        </ul>
        <p className="mb-2">After you have filled in these details, you will be eligible to apply for tokenization.</p>
        
        <h3 className="text-xl font-semibold mb-1">Tokenization Explained:</h3>
        <p>Once your investment details are submitted, your requested amount will be divided into 1,000 tokens. Each token’s value is determined by the total amount you are seeking. For example, if you ask for 20 lakh INR, each token will be valued at 2,000 INR. This system allows individuals with smaller budgets to invest in your startup.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Step 4: Provide Additional Details</h2>
        <p className="mb-2">In this section, add details that will build trust with potential investors:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Previous Investors:</strong> List any previous investors who have funded your startup.</li>
          <li><strong>Contact Details:</strong> Provide contact information for investors to reach you.</li>
          <li><strong>Message for Investors:</strong> A personalized message to potential investors, explaining why they should invest in your startup.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Step 5: Request Box</h2>
        <p className="mb-2">Use this section to specify any additional needs your startup has, such as:</p>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Job Requirements:</strong> If you are hiring, list the positions you need to fill.</li>
          <li><strong>Raw Material Requirements:</strong> Specify any materials you need to procure.</li>
          <li><strong>Other Needs:</strong> Any other specific requests that could support your startup’s growth.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Step 6: Trending Page Submission</h2>
        <p>If you want your startup to be featured on our Trending Page, provide additional details here. Being on the Trending Page can increase visibility and attract more attention from investors and the public.</p>
      </div>
    </div>
  )
}

export default Instruction
