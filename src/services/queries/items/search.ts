import type { Item } from '$services/types';
import { client } from '$services/redis';
import { itemsIndexKey } from '$services/keys';
import { deserialize } from '$services/queries/items/deserialize';

export const searchItems = async (term: string, size: number = 5): Promise<Item[]> => {
	const cleaned = term
		.replaceAll(/[^a-zA-Z0-9 ]/g, '')
		.trim()
		.split(' ')
		.map((word) => (word ? `%${word}%` : ''))
		.join(' ');

	if (cleaned === 'true') return [];

	const results = await client.ft.search(itemsIndexKey(), cleaned, {
		LIMIT: {
			from: 0,
			size: size
		}
	});

	console.log(results);
	console.log(results.documents[1]?.value);

	return results.documents.map(({ id, value }) => deserialize(id, value as any));
};
