import { zodResolver } from '@hookform/resolvers/zod';
import { UseMutationResult } from '@tanstack/react-query';
import {
    useForm,
    SubmitHandler,
    UseFormReturn,
    FieldValues,
} from 'react-hook-form';
import { ZodSchema } from 'zod';

interface GenericError {
    message?: string;
    code?: number;
    stack?: string;
}

type ControllerProps<T, TData, TVariables, TContext> = {
    dataMutation: UseMutationResult<TData, GenericError, TVariables, TContext>;
    schema: ZodSchema<T>;
    notificationMessage: string;
    render: (methods: UseFormReturn<FieldValues>) => React.ReactNode;
};

const FormController = <T, TData, TVariables, TContext>({
    dataMutation,
    schema,
    notificationMessage,
    render,
}: ControllerProps<T, TData, TVariables, TContext>) => {
    const methods = useForm({
        resolver: zodResolver(schema),
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dataMutation.mutate(data as TVariables, {
            onSuccess: () => alert(notificationMessage),
            onError: (error) => {
                const errorMessage = error?.message ?? 'Unknown error occurred';
                alert(`Error: ${errorMessage}`);
            },
        });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                methods
                    .handleSubmit(onSubmit)(e)
                    .catch((error: unknown) => {
                        const isGenericError = (
                            error: unknown
                        ): error is GenericError =>
                            typeof error === 'object' &&
                            error !== null &&
                            'message' in error;

                        const errorMessage = isGenericError(error)
                            ? error.message
                            : 'An unknown error occurred';
                        alert(`Error during form submission: ${errorMessage}`);
                    });
            }}
            className="flex flex-col gap-4"
        >
            {render(methods)}
            <button
                type="submit"
                className={`font-bold py-2 px-4 rounded-3xl w-[180px] h-[44px] text-[#696969] text-base  ${
                    methods.formState.isValid ? 'bg-[#5655F1]' : 'bg-[#D4D4D4]'
                } text-white`}
                disabled={!methods.formState.isValid}
            >
                Submit
            </button>
        </form>
    );
};

export default FormController;
