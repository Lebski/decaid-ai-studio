import React from "react";

interface IconBoxProps {
    icon: string;
    className?: string;
    variant: 'sm' | 'md' | 'lg' | 'xl';
}

const IconBox: React.FC<IconBoxProps> = ({ icon, variant, className }) => {
    const baseClassesContainer = "flex justify-center items-center rounded-lg border border-[#E4E7EC] bg-white shadow-[0_0_0_1px_rgba(16,24,40,0.18)_inset,0_-2px_0_0_rgba(16,24,40,0.05)_inset,0_1px_2px_0_rgba(16,24,40,0.05)]"
    const variantClassesContainer = {
        sm: "w-8 h-8 p-2 rounded-sm",
        md: "w-10 h-10 p-2.5 rounded-md",
        lg: "w-12 h-12 p-3 rounded-lg",
        xl: "w-14 h-14 p-3.5 rounded-lg",
    };

    const baseClassesIcon = "object-contain shrink-0 w-6 h-6 shadow-sm aspect-square";
    const variantClassesIcon = {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-7 h-7",
    };

    return (
        <div className={`${baseClassesContainer} ${variantClassesContainer[variant]} ${className || ''}`}>
            <img src={icon} alt="" className={`${baseClassesIcon} ${variantClassesIcon[variant]}`} />
        </div>
    )
};

export default IconBox;