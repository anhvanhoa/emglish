import type { FieldValues, UseFormReturn } from 'react-hook-form';

export const isError = <T extends FieldValues>(form: UseFormReturn<T>, key: keyof T) => {
    return !!form.formState.errors[key]?.message;
};
export const getMessage = <T extends FieldValues>(form: UseFormReturn<T>, key: keyof T) => {
    return form.formState.errors[key]?.message;
};
