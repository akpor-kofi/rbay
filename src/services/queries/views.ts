import { client } from '$services/redis';

export const incrementView = async (itemId: string, userId: string) => {
	// @ts-ignore
	return client.incrementView(itemId, userId);
};
