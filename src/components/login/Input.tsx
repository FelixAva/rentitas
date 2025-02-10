import React from 'react';

interface Props {
  label: string;
  type: string;
  placeholder: string;
}

export default function Input( { label, type, placeholder }: Props ) {
  return (
    <div>
      <label
        className="block pb-1.5"
      >{ label }</label>
      <input
        type={ type }
        placeholder={ placeholder }
        className="border-2 border-black rounded-md p-1 pl-2 w-100"
      />
    </div>
  );
}
