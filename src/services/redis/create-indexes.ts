import { client } from '$services/redis/client';
import { itemsIndexKey, itemsKey } from '$services/keys';
import { SchemaFieldTypes } from 'redis';

export const createIndexes = async () => {
	const indexes = await client.ft._list();

	const exists = indexes.find((index) => index === itemsIndexKey());

	if (exists) return;

	return client.ft.create(
		itemsIndexKey(),
		{
			name: {
				type: SchemaFieldTypes.TEXT
			},
			description: {
				type: SchemaFieldTypes.TEXT
			}
		},
		{
			ON: 'HASH',
			PREFIX: itemsKey('')
		}
	);
};
