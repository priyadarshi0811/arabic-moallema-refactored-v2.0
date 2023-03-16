import React from "react";

function WarningCard(props) {
  const { title, message } = props;

  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded-md shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-yellow-500" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1z"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-2 text-sm">{message}</div>
        </div>
      </div>
    </div>
  );
}

export default WarningCard;
