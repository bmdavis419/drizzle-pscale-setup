import { db } from '$lib/db';

export const load = async () => {
	const contacts = await db.query.contact.findMany();

	return { contacts };
};
