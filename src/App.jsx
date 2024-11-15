import React from 'react';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow">
        <div className="max-w-7xl mx-auto py-8 px-4">
          <h1 className="text-4xl font-bold text-center">
            Leeds University Blockchain Society
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pt-8 space-y-8">
        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to LUBS</h2>
          <p className="text-gray-600">
            Join us in exploring the exciting world of blockchain technology and cryptocurrency.
            We offer a variety of activities and events to help you understand and get involved
            in this revolutionary technology.
          </p>
        </section>

        {/* Committee Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Committee 2023-2024</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-indigo-600">President</h3>
              <p className="text-gray-700">Lenny Breeds</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-indigo-600">Treasurer</h3>
              <p className="text-gray-700">Prabodh Gyawali</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-indigo-600">Secretary</h3>
              <p className="text-gray-700">Fred Raybone</p>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Introductions to Blockchain Technology</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Web3 Building Sessions</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Hackathon Teams</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Social Events</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Developer Workshops</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Trading Workshops</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Industry Speaker Talks</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p>Networking Opportunities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Connect With Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a 
              href="https://www.facebook.com/LUUCABSoc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-600">Facebook</span>
            </a>
            <a 
              href="https://www.instagram.com/luucabsoc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-pink-600">Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/channel/UCJReBjax31hyfGDxfu7bZ1Q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-red-600">YouTube</span>
            </a>
            <a 
              href="https://www.linkedin.com/company/luucabsoc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-700">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/luucabsoc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-blue-400">Twitter</span>
            </a>
            <a 
              href="https://engage.luu.org.uk/groups/MXQ/cryptocurrency-blockchain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-green-600">LUU Page</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
