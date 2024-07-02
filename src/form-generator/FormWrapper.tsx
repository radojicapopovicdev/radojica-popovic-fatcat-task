import { useMutation } from '@tanstack/react-query';

import FormController from '@homework-task/form-generator/FormController';
import { postSchema } from '@homework-task/form-generator/FormSchema';
import InputField from '@homework-task/form-generator/InputField';

type BlogPost = {
    headline: string;
    content: string;
};

const useSubmitPost = () =>
    useMutation({
        mutationFn: async (postData: BlogPost) => {
            const { headline, content } = postData;
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ title: headline, body: content }),
                }
            );
            if (!response.ok) {
                throw new Error('Failed to send data');
            }
            return response.json();
        },
    });

const FormWrapper: React.FC = () => {
    const mutation = useSubmitPost();

    return (
        <div className="col-span-full flex flex-col gap-4 p-4 bg-gray-100 py-6 px-4 rounded-lg">
            <h2 className="text-3xl xl:text-5xl font-medium mb-4">
                Form Generator Component
            </h2>
            <div className="bg-white px-[36px] py-[36px] rounded-xl shadow-lg max-w-[468px]">
                <FormController<BlogPost, BlogPost, BlogPost, unknown>
                    dataMutation={mutation}
                    schema={postSchema}
                    notificationMessage="Post created successfully!"
                    render={({ register, formState: { errors } }) => (
                        <>
                            <span className="text-base font-medium">Title</span>
                            <InputField
                                fieldType="text"
                                fieldPlaceholder="Enter your title..."
                                fieldName="headline"
                                formRegister={register}
                                validationError={errors?.headline}
                            />
                            <span className="text-base font-medium">Body</span>
                            <InputField
                                fieldType="textarea"
                                fieldPlaceholder="Enter your content..."
                                fieldName="content"
                                formRegister={register}
                                validationError={errors?.content}
                            />
                        </>
                    )}
                />
            </div>
        </div>
    );
};

export default FormWrapper;
