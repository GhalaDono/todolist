<script lang="ts">
 import Header from "$lib/header.svelte";
</script>

<div class="m-12 flex flex-col gap-8">
	<!--اللي سويناه لما فصلنا الاكواد اسمه component-->
	<Header/>
	
	<div class="input-group input-group-divider  flex justify-between">
		<input class="flex-1 !bg-white" type="search" placeholder="إدخال مهام" />
		<button class="variant-soft-secondary">إضافة</button>
	</div>
</div>
