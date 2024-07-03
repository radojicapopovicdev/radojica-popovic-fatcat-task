import React, { useState } from 'react';

import clsx from 'clsx';

import getUsers from '@homework-task/api/users';
import List from '@homework-task/components/List';
import ListCard from '@homework-task/components/ListCard';
import {
    PageGenerator,
    Section,
} from '@homework-task/components/PageGenerator';
import FormWrapper from '@homework-task/form-generator/FormWrapper';

const sections: Section[] = [
    {
        type: 'layoutSection',
        props: { background: 'bg-white flex min-w-[900px]', children: null },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Fat Cat Experts Will Help You',
                    image: '/media/hero.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { background: 'bg-white min-w-[900px] ', children: null },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Fat Cat will help you with your social life ',
                            description:
                                'Cats can be a good friend to you, they will cuddle you, people will start coming to you to pet your cat when you are outside for a walk.',
                        },
                        {
                            title: 'Fat Cat will help you with your brain training ',
                            description:
                                'You will have to think about a lot of thing because of your cat. For example, did you live some food on table so your cat won’t eat it.',
                        },
                    ],
                },
            },
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cats/cat_1.png',
                        '/media/cats/cat_2.png',
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                        '/media/cats/cat_7.png',
                        '/media/cats/cat_8.png',
                        '/media/cats/cat_9.png',
                    ],
                },
            },
        ],
    },
];

export const Landing: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState('list');
    const activeButtonClass = 'bg-[#4b00ff] text-white';
    const inactiveButtonClass = 'text-black';

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
                    'sticky',
                    'top-0',
                    'h-[179px]',
                    'flex',
                    'bg-[#EFEDF8]',
                    'rounded-2xl',
                    'shadow-2xl',
                    'z-10',
                    'p-4',
                    'col-span-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
                    'shadow-md'
                )}
            >
                <h2 className=" absolute text-2xl xl:text-4xl font-medium mb-4 mt-[10px] ml-[20px]">
                    See Results
                </h2>
                <div className="flex bg-[#EFEDF8] items-center gap-6 ">
                    <button
                        className={clsx(
                            'w-[172px] h-[44px] border-[1px] border-[#5655F1] rounded-[70px] px-6',
                            activeComponent === 'list'
                                ? activeButtonClass
                                : inactiveButtonClass
                        )}
                        onClick={() => setActiveComponent('list')}
                    >
                        List
                    </button>
                    <button
                        className={clsx(
                            'h-[44px] w-[279px] border-[1px] border-[#5655F1] rounded-[70px] px-6',
                            activeComponent === 'form'
                                ? activeButtonClass
                                : inactiveButtonClass
                        )}
                        onClick={() => setActiveComponent('form')}
                    >
                        Form
                    </button>
                    <button
                        className={clsx(
                            'h-[44px] w-[279px] border-[1px] border-[#5655F1] rounded-[70px] px-6',
                            activeComponent === 'page'
                                ? activeButtonClass
                                : inactiveButtonClass
                        )}
                        onClick={() => setActiveComponent('page')}
                    >
                        Page
                    </button>
                </div>
            </div>
            {activeComponent === 'list' && (
                <List
                    queryKey={['users']}
                    queryFn={getUsers}
                    ItemComponent={ListCard}
                    errorMessage="Failed to fetch users."
                />
            )}
            {activeComponent === 'form' && <FormWrapper />}
            {activeComponent === 'page' && (
                <PageGenerator sections={sections} />
            )}
        </section>
    );
};
