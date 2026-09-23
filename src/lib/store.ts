import { type CollectionEntry, getCollection } from 'astro:content';

export type StoreItem = CollectionEntry<'store'>;

/** Items that appear in the store (everything except status: hidden), in display order. */
export async function getStoreItems() {
	const items = await getCollection('store', ({ data }) => data.status !== 'hidden');
	return items.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title));
}

/** Options that can be bought right now: the item is available and the option has a link. */
export const buyableOptions = (item: StoreItem) =>
	item.data.status === 'available' ? item.data.options.filter((option) => option.url) : [];

/** Numeric price for sorting and structured data ("$1,045.00" -> "1045.00"). */
export const priceNumber = (price?: string) => price?.replace(/,/g, '').match(/\d+(\.\d+)?/)?.[0];

/** "From $15" style label for the grid, using the lowest priced option. */
export function priceLabel(item: StoreItem) {
	const prices = item.data.options
		.map((option) => option.price)
		.filter((price): price is string => Boolean(price))
		.sort((a, b) => Number(priceNumber(a) ?? Infinity) - Number(priceNumber(b) ?? Infinity));
	if (prices.length === 0) return '';
	return prices.length > 1 ? `From ${prices[0]}` : prices[0];
}
