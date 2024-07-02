import React from 'react';

import clsx from 'clsx';

import { Button } from '@homework-task/components/Button';

interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
}

interface CardsProps {
    cards: Card[];
}

export const Cards: React.FC<CardsProps> = ({ cards }) => {
    return (
        <div className={clsx('flex', 'justify-center', 'items-center')}>
            <div className={clsx('grid', 'grid-cols-2', 'gap-8', 'w-8/12')}>
                {cards.map((card) => (
                    <div
                        key={card.title}
                        className={clsx('rounded-md', 'p-8', card.background)}
                    >
                        <img src={card.image} alt="Icon" width="120" />
                        <div className="my-8">
                            <div
                                className={clsx(
                                    'text-2xl',
                                    'font-bold',
                                    'mb-2'
                                )}
                            >
                                {card.title}
                            </div>
                            <div className={clsx('text-xl')}>
                                {card.description}
                            </div>
                        </div>
                        <Button onClick={card.onClick}>
                            {card.buttonText}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};
