import React from 'react';
import { Handle, Position } from 'reactflow';

/**
 * TextNode Component
 * 
 * This component represents a text message node in the chatbot flow.
 * It's designed to be beginner-friendly with clear structure and comments.
 * 
 * Features:
 * - Left handle (target) - accepts incoming connections (green)
 * - Right handle (source) - creates outgoing connections (red)
 * - Displays message text with a clean, modern design
 * - Uses icons8.com icon for the message icon
 */
const TextNode = ({ data, isConnectable }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-3 min-w-[200px] shadow-md hover:border-blue-500 hover:shadow-lg transition-all duration-200">
      {/* Left Handle - Target (accepts incoming connections) */}
      <Handle
        type="target"
        position={Position.Left}
        id="target"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-green-500 border-2 border-white hover:scale-125 transition-transform duration-200"
      />
      
      {/* Node Content */}
      <div className="flex flex-col gap-2">
        {/* Header with icon and label */}
        <div className="flex items-center gap-2 mb-1">
          {/* Message icon from icons8.com */}
          <img 
            src="https://img.icons8.com/ios/20/3B82F6/message-squared.png" 
            alt="Message" 
            className="w-5 h-5"
          />
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            Message
          </span>
        </div>
        
        {/* Message text content */}
        <div className="text-sm text-gray-700 leading-relaxed break-words max-w-[180px]">
          {data.text || 'Empty message'}
        </div>
      </div>
      
      {/* Right Handle - Source (creates outgoing connections) */}
      <Handle
        type="source"
        position={Position.Right}
        id="source"
        isConnectable={isConnectable}
        className="w-3 h-3 bg-red-500 border-2 border-white hover:scale-125 transition-transform duration-200"
      />
    </div>
  );
};

export default TextNode;
