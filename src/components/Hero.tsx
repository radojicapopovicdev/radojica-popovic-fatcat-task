import React from 'react';

interface HeroProps {
    title: string;
    image: string;
}

export const Hero: React.FC<HeroProps> = ({ title, image }) => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 ">
            <div className="w-4/12">
                <h1 className="text-5xl font-bold w-[414px]   ">{title}</h1>
            </div>
            <div className="w-[812px] pl-[106px]">
                <img src={image} width="100%" alt="Hero" loading="eager" />
            </div>
        </div>
    );
};

export type { HeroProps };
