import React from 'react'

interface IBorders {
    children: React.ReactNode
    className?: string
}

const Borders: React.FC<IBorders> = ({ children, className, ...rest }) => {
    return (
        <div className={`relative p-[15px] border-1 border-[#2E2E2E] ${className}`} {...rest}>
            <div className="absolute -left-[40px] -top-[1px] w-[40px] h-[1px] bg-[#2E2E2E]"/>
            <div className="absolute -left-[1px] -top-[40px] w-[1px] h-[40px] bg-[#2E2E2E]"/>
            <div className="absolute -right-[40px] -top-[1px] w-[40px] h-[1px] bg-[#2E2E2E]"/>
            <div className="absolute -right-[1px] -top-[40px] w-[1px] h-[40px] bg-[#2E2E2E]"/>
            {children}
            <div className="absolute -left-[40px] -bottom-[1px] w-[40px] h-[1px] bg-[#2E2E2E]"/>
            <div className="absolute -left-[1px] -bottom-[40px] w-[1px] h-[40px] bg-[#2E2E2E]"/>
            <div className="absolute -right-[40px] -bottom-[1px] w-[40px] h-[1px] bg-[#2E2E2E]"/>
            <div className="absolute -right-[1px] -bottom-[40px] w-[1px] h-[40px] bg-[#2E2E2E]"/>
        </div>
    )
}
export default Borders
