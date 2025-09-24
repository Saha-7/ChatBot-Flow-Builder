import React from 'react';

/**
 * SaveButton Component
 * 
 * A simple, beginner-friendly save button for the flow.
 * Uses icons8.com icon for consistency with the rest of the app.
 * 
 * Features:
 * - Clean, modern design with TailwindCSS
 * - Loading and disabled states
 * - Hover effects for better UX
 */
const SaveButton = ({ onSave, isLoading = false, disabled = false }) => {
  // Handle button click - only execute if not disabled or loading
  const handleClick = () => {
    if (!disabled && !isLoading) {
      onSave();
    }
  };

  return (
    <button
      className={`
        flex items-center gap-2 px-6 py-3 bg-blue-500 text-white border-none rounded-lg 
        text-sm font-semibold cursor-pointer transition-all duration-200 shadow-md
        hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-lg
        active:translate-y-0 active:shadow-md
        ${isLoading ? 'bg-gray-500 cursor-not-allowed' : ''}
        ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300 hover:translate-y-0 hover:shadow-md' : ''}
      `}
      onClick={handleClick}
      disabled={disabled || isLoading}
      title={disabled ? 'Cannot save flow' : 'Save flow'}
    >
      {/* Save Icon from icons8.com */}
      <img 
        src="https://img.icons8.com/ios/18/FFFFFF/save.png" 
        alt="Save" 
        className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`}
      />
      
      {/* Button Text */}
      <span className="whitespace-nowrap">
        {isLoading ? 'Saving...' : 'Save Flow'}
      </span>
    </button>
  );
};

export default SaveButton;
