import React from 'react';

interface Props {
  title: string;
  type?: "submit" | "reset" | "button";
  action: () => void;
}

export default function Button( { title, type = "button", action }: Props ) {
  return (
    <>
      <button
        type={ type }
        onClick={ action }
        className="text-2xl p-2 w-100 rounded-md cursor-pointer text-white bg-blue-600 #2653EB"
      >
        { title }
      </button>
    </>
  );
}
