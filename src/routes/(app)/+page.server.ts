import { products } from "@/db/schemas/tenant";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals: { context } }) => {
	if (context.type !== "tenant")
		return;

	return {
		foods: context.db.select().from(products).limit(100).offset(25)
	}
};
