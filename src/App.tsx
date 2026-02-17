import { useState } from 'react';
import { Smile } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="flex justify-center">
          <Smile className="w-16 h-16 text-cyan-600" />
        </div>

        <button
          onClick={() => setShowMessage(true)}
          className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Click Me
        </button>

        {showMessage && (
          <div className="animate-fade-in">
            <p className="text-4xl font-bold text-gray-800">Hello!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
