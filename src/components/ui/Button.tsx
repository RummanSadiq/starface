import React from 'react';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;
interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles?: string;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
}

const Button = (props:Props) => {
    return (
        <button
        onClick={props?.handleClick}
        className={`flex items-center bg-gradient-to-r from-orange-500 gradient-shadow to-yellow-500 text-white px-4 py-2 rounded shadow-md hover:from-orange-600 hover:to-yellow-600 transition-all ${props.styles}`}
        type={props?.type}
        title={props.title}
        disabled={props?.disabled}
        >
            {props.children}
        </button>
    )
}

export default Button;


