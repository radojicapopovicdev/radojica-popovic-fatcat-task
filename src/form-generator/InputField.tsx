import {
    UseFormRegister,
    FieldError,
    Merge,
    FieldValues,
    FieldErrorsImpl,
} from 'react-hook-form';

type InputFieldProps = {
    fieldType: string;
    fieldPlaceholder: string;
    fieldName: AllowedFieldNames;
    formRegister: UseFormRegister<FieldValues>;
    validationError:
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<FieldValues>>
        | undefined;
    numberValue?: boolean;
};

type AllowedFieldNames = 'headline' | 'content';

const InputField: React.FC<InputFieldProps> = ({
    fieldType,
    fieldPlaceholder,
    fieldName,
    formRegister,
    validationError,
    numberValue,
}) => (
    <>
        {fieldType === 'text' && (
            <input
                type={fieldType}
                placeholder={fieldPlaceholder}
                {...formRegister(fieldName, { valueAsNumber: numberValue })}
                className="block mb-3 p-4 w-full max-w-lg border-[#000000]/20 border-[1px] focus:border-[5655F1] focus:ring focus:ring-[5655F1] focus:ring-opacity-50 rounded-4xl "
            />
        )}
        {fieldType === 'textarea' && (
            <textarea
                placeholder={fieldPlaceholder}
                {...formRegister(fieldName, { valueAsNumber: numberValue })}
                className="block mb-3 p-2 w-full max-w-lg border-[1px] border-[#000000]/20 focus:border-[5655F1] focus:ring focus:ring-[5655F1] focus:ring-opacity-10 rounded-2xl h-[105px]"
            />
        )}
        {validationError && typeof validationError.message === 'string' && (
            <p className="text-red-500 text-sm mt-2">
                {validationError.message}
            </p>
        )}
    </>
);
export default InputField;
