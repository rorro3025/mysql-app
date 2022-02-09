import React from "react";

interface Props {
  children: React.ReactNode;
}
function Layput({ children }: Props) {
  return (
    <>
      <div className="mx-auto py-3 bg-sky-500 shadow-2xl">
        <h1 className="text-center text-2xl text-blue-800">
          MySQL, React and TypeScript
        </h1>
      </div>
      <div className="h-100">{children}</div>
      <div className="bg-violet-800 text-center mt-5 text-gray-200 py-4">
        <p>This is a footer</p>
      </div>
    </>
  );
}

export default Layput;
