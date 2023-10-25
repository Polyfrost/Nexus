import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useRef } from 'react';
import { useForm, UseFormProps } from 'react-hook-form';
import { z } from 'zod';

type ZAny = z.ZodObject<any>;
type ZAnyRecord = Record<string, ZAny>;

export interface UseZodFormProps<S extends ZAny>
	extends Exclude<UseFormProps<z.infer<S>>, 'resolver'> {
	schema?: S;
}

export const useZodForm = <S extends ZAny>(props?: UseZodFormProps<S>) => {
	const { schema, ...formProps } = props ?? {};

	return useForm<z.infer<S>>({
		...formProps,
		resolver: zodResolver(schema || z.object({}))
	});
};

type MultiDefaultValuesForm<S extends ZAnyRecord> = {
	[K in keyof S]?: UseZodFormProps<S[K]>['defaultValues'];
};
type MultiFormsData<S extends ZAnyRecord> = { [K in keyof S]?: z.infer<S[K]> };
type MultiOnDataForm<S extends ZAnyRecord> = (data: MultiFormsData<S>) => any;
type MultiExcludeZodForm<S extends ZAnyRecord, K extends keyof S> = Exclude<
	UseZodFormProps<S[K]>,
	'schema' | 'defaultValues'
>;
type MultiOnValidForm<S extends ZAnyRecord> = (data: MultiFormsData<S>) => any | Promise<any>;
type MultiOnErrorForm<S extends ZAnyRecord> = (key: keyof S) => void;

type MultiZodFormProps<S extends ZAnyRecord> = {
	schemas: S;
	defaultValues: MultiDefaultValuesForm<S>;
	onData?: MultiOnDataForm<S>;
};

export const useMultiZodForm = <S extends ZAnyRecord>({
	schemas,
	defaultValues,
	onData
}: MultiZodFormProps<S>) => {
	const formsData = useRef<MultiFormsData<S>>({});

	return {
		useForm<K extends keyof S>(key: K, props?: MultiExcludeZodForm<S, K>) {
			const form = useZodForm({
				...props,
				defaultValues: defaultValues[key],
				schema: schemas[key]
			});
			const handleSubmit = form.handleSubmit;

			form.handleSubmit = useCallback(
				(onValid, onError) =>
					handleSubmit((data, e) => {
						formsData.current[key] = data;
						onData?.(formsData.current);
						return onValid(data, e);
					}, onError),
				[handleSubmit, key]
			);

			return form;
		},
		handleSubmit: (onValid: MultiOnValidForm<S>, onError?: MultiOnErrorForm<S>) => () => {
			for (const key of Object.keys(schemas))
				if (formsData.current[key] === undefined) {
					onError?.(key);
					return;
				}

			return onValid(formsData.current);
		}
	};
};
