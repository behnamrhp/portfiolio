import React from 'react';

/**
 * BackCoverPage - Back cover of the book
 * Uses back-cover.png as background (applied in BookContainer)
 * Empty content, just shows the background image
 */
const BackCoverPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-transparent relative">
      {/* Intentionally empty - background image is applied in BookContainer */}
    </div>
  );
};

export default BackCoverPage;
