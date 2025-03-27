import React from "react";

type FullScreenWrapperProps = {
  children: React.ReactNode;
};

const FullScreenWrapper: React.FC<FullScreenWrapperProps> = ({ children }) => {
  return (
    <div className="w-100% flex items-center justify-center">
      {children}
    </div>
  );
};

export default FullScreenWrapper;
