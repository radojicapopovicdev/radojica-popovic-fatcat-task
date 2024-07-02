import React from 'react';

import Marquee from 'react-fast-marquee';

interface TrustBarProps {
    images: string[];
}

export const TrustBar: React.FC<TrustBarProps> = ({ images }) => {
    return (
        <Marquee>
            {images.map((image) => (
                <img
                    key={image}
                    src={image}
                    width={100}
                    className="mx-10"
                    alt=""
                />
            ))}
        </Marquee>
    );
};
