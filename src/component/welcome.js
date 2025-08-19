import React from 'react'

export default function Welcome(){
 return(
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-200 to-indigo-300 p-4">
      {/* Box with rounded corners & shadow */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          🎓 Welcome to Gyan Ganga Institute of Technology and Sciences
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are delighted to have you here!  <br />
          At{" "}
          <span className="font-semibold text-indigo-600">GGITS</span>, you will
          find endless opportunities to{" "}
          <span className="font-medium">learn</span>,{" "}
          <span className="font-medium">grow</span>, and{" "}
          <span className="font-medium">achieve your dreams</span>.  
          <br /> <br />
          This is not just a college, but a family where every step you take
          brings you closer to success.   
          <br /> <br />
          Wishing you a wonderful journey ahead filled with knowledge,
          innovation, and unforgettable memories. 
        </p>
      </div>
    </div>
 )
}