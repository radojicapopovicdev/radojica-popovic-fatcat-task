import User from '@homework-task/types/user.type';

interface ListItemProps extends User {}

const ListCard: React.FC<ListItemProps> = ({
    id,
    name,
    username,
    email,
    phone,
}) => {
    const renderUserInfo = (label: string, value: string) => (
        <p className="text-base leading-relaxed">
            <span className="font-semibold text-black mr-2">{label}:</span>
            <span className="text-gray80">{value}</span>
        </p>
    );

    return (
        <div
            className="flex flex-col gap-3 py-7 px-7 rounded-2xl bg-[#F2E9E1] shadow-md shadow-[#532800]/25"
            key={`list-user-${id}`}
        >
            {renderUserInfo('ID', id.toString())}
            {renderUserInfo('Name', name)}
            {renderUserInfo('Username', username)}
            {renderUserInfo('Email', email)}
            {renderUserInfo('Phone', phone)}
        </div>
    );
};

export default ListCard;
