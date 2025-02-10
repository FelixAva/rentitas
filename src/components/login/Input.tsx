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
        className="block text-2xl pb-1.5"
      >{ label }</label>
      <input
        type={ type }
        placeholder={ placeholder }
        className="border-2 border-black rounded-md p-1 pl-1.5 text-2xl"
      />
    </div>
  );
}
