import React from 'react';

interface Item {
    title: string;
    description: string;
}

interface ItemsProps {
    items: Item[];
}

export const ItemsShowcase: React.FC<ItemsProps> = ({ items }) => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 gap-8 w-8/12">
                {items.map(({ title, description }) => (
                    <div key={title} className="flex flex-col gap-2 ">
                        <img
                            src="/media/cards/shape2.svg"
                            width={25}
                            alt="Checkmark"
                        />
                        <div className="text-2xl font-bold w-[255px]">
                            {title}
                        </div>
                        <p className="">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export type { ItemsProps };
