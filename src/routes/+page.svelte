<script lang="ts">
	import Header from "$lib/header.svelte";
	import Input from "$lib/Input.svelte"; 
	import dayjs from 'dayjs';
	let isChecked = false;
  </script>
  
  <div class="p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto">
	<!--اللي سويناه لما فصلنا الاكواد اسمه component-->
	<Header />
	<Input />
	<ol class="gap-2 flex-col">
		<li class="bg-success-500 p-2 rounded-md flex justify-between items-center">
		<div>
			<input 
		class="checkbox h-6 w-6 border-solid border-2" 
		type="checkbox" />
		<span class="mr-2">
			اكمال المقطع
		</span>
		</div>
	<div class="flex gap-2">
		<button class="btn variant-filled-surface">
		{dayjs()}
	</button>
	<button class="btn variant-filled-surface p-2">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-6" viewBox="0 0 16 16"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75"/><circle cx="8" cy="8" r=".75"/><circle cx="8" cy="13.5" r=".75"/></g></svg>
	</button>
    </div>
		</li>
	</ol>
  </div>

  