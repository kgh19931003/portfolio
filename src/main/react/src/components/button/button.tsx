import React from 'react';

// 컴포넌트의 props 타입 정의
interface ButtonProps {
    label: string;
    bg: string;
    onClick: () => void;
}

// Button 컴포넌트 정의
const Button: React.FC<ButtonProps> = ({ label, bg, onClick }) => {
    return (
        <button onClick={onClick} className={`px-4 py-2 ${bg} k z-5 text-white rounded`}>
            {label}
        </button>
    );
};

export default Button;