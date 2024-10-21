<script lang="ts">
import type { Product } from "@/db/schemas/tenant";
import { Separator } from "./ui/separator/";
import { Badge } from "./ui/badge/";

interface Props {
	food: Product;
}

const { food }: Props = $props();
</script>

<a
	href="##"
	class="border rounded-lg bg-muted transform transition-transform duration-300 delay-100 hover:scale-[1.025] shadow-sm">
	<div class="relative">
		<img
			src={food.imageUrl?.toString() ?? "/placeholder.svg"}
			alt=""
			class="rounded-[7px] rounded-b-none h-[256px] w-full object-cover" />
		{#if food.dietType}
			<div class="absolute bottom-0 p-2 capitalize">
				<Badge>{food.dietType}</Badge>
			</div>
		{/if}
	</div>
	<Separator />
	<div class="p-2 min-h-20">{food.name}</div>
</a>
