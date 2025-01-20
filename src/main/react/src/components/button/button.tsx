import React from 'react';

// 컴포넌트의 props 타입 정의
interface ButtonProps {
    label: string;
    onClick: () => void;
}

// Button 컴포넌트 정의
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
            {label}
        </button>
    );
};

export default Button;