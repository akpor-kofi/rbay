export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userId: string) => `users#${userId}`;
export const sessionsKey = (sessionId: string) => `users#${sessionId}`;
export const usernamesUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => `users:likes#${userId}`;
export const usernameKeys = () => 'usernames';

// Items
export const itemsKey = (itemId: string) => `users#${itemId}`;
export const itemsByViewsKey = () => 'items:views';
export const itemsByEndingAtKey = () => 'items:endingAt';
export const itemsViewsKey = (itemId: string) => `items:views#${itemId}`;
export const bidHistoryKey = (itemId: string) => `history#${itemId}`;
export const itemsByPriceKey = () => 'items:price';
export const itemsIndexKey = () => 'idx:items';
