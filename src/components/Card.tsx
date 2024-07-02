import React from 'react';

interface Props {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const Card = (props: Props) => {
  return (
    <div className="bg-white p-6 flex flex-col rounded-xl">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 p-4 bg-sky-100 rounded">
          {props.icon}
        </div>
        <h3 className="ml-4 text-lg font-semibold text-left">{props.title}</h3>
      </div>
      <div className="text-left">
        <p className="text-gray-600">{props.content}</p>
      </div>
    </div>
  );
};

export default Card;
