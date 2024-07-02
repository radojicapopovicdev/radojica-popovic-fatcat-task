import React from 'react';

import clsx from 'clsx';

import getUsers from '@homework-task/api/users';
import List from '@homework-task/components/List';
import ListCard from '@homework-task/components/ListCard';
import FormWrapper from '@homework-task/form-generator/FormWrapper';

export const Landing: React.FC = () => {
    return (
        <section
            className={clsx(
                'bg-cream',
                'min-h-screen',
                'grid',
                'grid-cols-1',
                'lg:grid-cols-landing',
                'gap-16',
                'place-content-center',
                'p-8',
                'sm:p-16',
                'relative'
            )}
        >
            <div
                className={clsx(
                    'flex',
                    'flex-col',
                    'gap-6',
                    'items-start',
                    'self-center',
                    'w-full'
                )}
            >
                <img
                    className={clsx(
                        'w-[148px]',
                        'h-[168px]',
                        'absolute',
                        'left-[-104px]',
                        'rotate-45'
                    )}
                    src="/media/cats/cat_10.png"
                    alt="Cat"
                />
                <h1
                    className={clsx(
                        'leading-normal',
                        'text-3xl',
                        'xl:text-5xl',
                        'xl:leading-normal',
                        'text-black'
                    )}
                >
                    Welcome to{' '}
                    <span className={clsx('text-primary')}>
                        Radojica Popovic&apos;s fatcat-task
                    </span>
                    - where curiosity meets opportunity.
                </h1>
            </div>
            <img
                className={clsx(
                    'max-w-[600px]',
                    'lg:max-w-none',
                    'w-full',
                    'self-center',
                    'justify-self-center'
                )}
                src="/media/landing/hero.svg"
                alt="Hero image"
            />

            <div
                className={clsx(
                    'col-span-full',
                    'grid',
                    'gap-8',
                    'grid-cols-1',
                    'md:grid-cols-2',
                    'xl:grid-cols-4'
                )}
            ></div>
            <List
                queryKey={['users']}
                queryFn={getUsers}
                ItemComponent={ListCard}
                errorMessage="Failed to fetch users."
            />

            <FormWrapper />
        </section>
    );
};
