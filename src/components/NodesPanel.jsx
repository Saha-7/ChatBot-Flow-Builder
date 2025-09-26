

/**
 * NodesPanel Component
 * 
 * This component displays all available node types that can be added to the flow.
 * It's designed to be easily extensible for future node types.
 * 
 * Features:
 * - Clean, organized list of available nodes
 * - Click to add functionality (beginner-friendly)
 * - Placeholder for future node types
 * - Uses icons8.com icons for consistency
 */
const NodesPanel = ({ onAddTextNode }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Panel Header */}
      {/* <div className="p-6 pb-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Available Nodes</h3>
        <p className="text-sm text-gray-600">Click to add to flow</p>
      </div> */}
      
      {/* Panel Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Text Message Node - Currently Available */}
        <div 
          className="flex items-center p-3 mb-2 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          onClick={onAddTextNode}
          title="Click to add Text Message node"
        >
          {/* Node Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-lg mr-3">
            <img 
              src="https://img.icons8.com/ios/20/FFFFFF/message-squared.png" 
              alt="Message" 
              className="w-5 h-5"
            />
          </div>
          
          {/* Node Info */}
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-800 mb-1">Message</div>
            <div className="text-xs text-gray-600">Text message node</div>
          </div>
          
          {/* Add Button */}
          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <img 
              src="https://img.icons8.com/ios/12/FFFFFF/plus.png" 
              alt="Add" 
              className="w-3 h-3"
            />
          </div>
        </div>

        {/* Future Node Types - Coming Soon */}
        <div className="flex items-center p-3 mb-2 bg-gray-100 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-lg mr-3">
            <img 
              src="https://img.icons8.com/ios/20/FFFFFF/image.png" 
              alt="Image" 
              className="w-5 h-5"
            />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-600 mb-1">Image</div>
            <div className="text-xs text-gray-500">Coming soon</div>
          </div>
        </div>

        <div className="flex items-center p-3 mb-2 bg-gray-100 border border-gray-200 rounded-lg opacity-50 cursor-not-allowed">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-lg mr-3">
            <img 
              src="https://img.icons8.com/ios/20/FFFFFF/button.png" 
              alt="Button" 
              className="w-5 h-5"
            />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-600 mb-1">Button</div>
            <div className="text-xs text-gray-500">Coming soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodesPanel;
