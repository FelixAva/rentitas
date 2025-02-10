import React from 'react';

interface Props {
  title: string;
  type?: "submit" | "reset" | "button";
  action: () => void;
}

export default function Button( { title, type = undefined, action }: Props ) {
  return (
    <>
      <button
        type={ type }
        onClick={ action }
      >
        { title }
      </button>
    </>
  );
}
