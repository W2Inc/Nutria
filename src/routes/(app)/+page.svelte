<script lang="ts">
import FoodCard from "@/components/food-card.svelte";

const { data } = $props();
</script>

<div class="relative flex-1">
	{#await data.foods}
		<p>Loading...</p>
	{:then foods}
		{#if foods}
			<div class="p-4 w-full gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6">
				{#each foods as food}
					<FoodCard {food}></FoodCard>
				{/each}
			</div>
		{/if}
	{/await}
</div>
