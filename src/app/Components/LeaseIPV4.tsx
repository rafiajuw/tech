// app/Components/LeaseIPv4.tsx
import React from 'react';

const LeaseIPv4 = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 animate-fadeIn">
          Lease IPv4
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 animate-slideIn">
          3 Steps To Lease IPv4 Addresses Within 48 Hours
        </h3>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Prepare yourself for a quick and easy IPv4 addresses leasing process with All Tech Cloud Services. You may quickly get the IP addresses your network needs by following these three simple procedures. You will obtain the addresses in less than 48 hours thanks to our smooth and effective approach.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slideIn" style={{ animationDelay: '0s' }}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Service Contract</h4>
            <p className="text-gray-700 text-sm sm:text-base">
              Once confirmed on the total number of the IPv4 addresses and leasing period, Our IP specialist will prepare the service contract.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slideIn" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Payment</h4>
            <p className="text-gray-700 text-sm sm:text-base">
              After the service contract is signed, you will receive an invoice from us and proceed to make the payments.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slideIn" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
            </div>
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Requirement</h4>
            <p className="text-gray-700 text-sm sm:text-base">
              After payment is received, our IP specialist will prepare the letter of Authorization and you will get the IP address from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaseIPv4;