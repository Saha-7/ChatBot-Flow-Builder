import React, { useState, useEffect } from 'react';

/**
 * SettingsPanel Component
 * 
 * This component appears when a node is selected, replacing the NodesPanel.
 * It provides an interface to edit the selected node's properties.
 * 
 * Features:
 * - Real-time text editing with live updates
 * - Node information display
 * - Clean, beginner-friendly interface
 * - Uses icons8.com icons for consistency
 */
const SettingsPanel = ({ node, onUpdateNode, onClose }) => {
  // Local state for the text input
  const [text, setText] = useState(node?.data?.text || '');

  // Update text when node changes (when user selects a different node)
  useEffect(() => {
    setText(node?.data?.text || '');
  }, [node]);

  // Handle text input changes - updates both local state and node data
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onUpdateNode(node.id, { text: newText });
  };

  // Handle Enter key press to save changes
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.target.blur(); // Remove focus to trigger save
    }
  };

  // Don't render if no node is selected
  if (!node) {
    return null;
  }

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Panel Header */}
<div className="relative flex items-center justify-center p-6 pb-4 border-b border-gray-200">
  
  {/* Back Button (left side) */}
  <button 
    className="absolute left-6 flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
    onClick={onClose}
    title="Close settings"
  >
    <img 
      src="https://img.icons8.com/fluency-systems-regular/48/long-arrow-left.png" 
      alt="Close" 
      className="w-4 h-4"
    />
  </button>

  {/* Centered Title */}
  <span className="text-lg font-semibold text-gray-800">Message</span>

</div>


      {/* Panel Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Text Editing Section */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Text
          </label>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg text-sm font-sans resize-vertical min-h-[80px] focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200"
            value={text}
            onChange={handleTextChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter your message text..."
            rows={4}
            autoFocus
          />
          <div className="text-xs text-gray-500 mt-2 italic">
            Press Enter to save changes
          </div>
        </div>

        {/* Node Information Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Node Information</h4>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-600">Node ID:</span>
              <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-200 text-gray-800">
                {node.id}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-600">Type:</span>
              <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-200 text-gray-800">
                Text Message
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-600">Position:</span>
              <span className="text-xs font-mono bg-white px-2 py-1 rounded border border-gray-200 text-gray-800">
                ({Math.round(node.position.x)}, {Math.round(node.position.y)})
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
