import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useQuery } from '@tanstack/react-query';
import { ThreeDots } from 'react-loader-spinner';

type ListProps<T> = {
    queryKey: string[];
    queryFn: () => Promise<T[]>;
    ItemComponent: React.FC<T>;
    errorMessage?: string;
};

const ErrorComponent: React.FC<{ message: string }> = ({ message }) => (
    <div
        className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
    >
        <FontAwesomeIcon
            icon={faExclamationTriangle}
            className="text-lg mr-2"
        />
        <span className="font-medium">{message}</span>
    </div>
);

const LoadingComponent: React.FC = () => (
    <div className="text-center">
        <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
);

const List = <T,>({
    queryKey,
    queryFn,
    ItemComponent,
    errorMessage = 'Request failed!',
}: ListProps<T>) => {
    const { data, error, isLoading } = useQuery({ queryKey, queryFn });

    if (error) return <ErrorComponent message={errorMessage} />;
    if (isLoading) return <LoadingComponent />;

    return (
        <div className="col-span-full flex flex-col gap-6 p-4 rounded-2xl">
            <h2 className="text-black text-3xl xl:text-5xl leading-normal font-medium mb-4">
                List Component
            </h2>
            <div className="col-span-full grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {data?.map((item, index) => (
                    <ItemComponent key={`list-item-${index}`} {...item} />
                ))}
            </div>
        </div>
    );
};

export default List;
