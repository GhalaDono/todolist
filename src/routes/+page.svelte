<script lang="ts">
	import Header from "$lib/header.svelte";
	import Input from "$lib/Input.svelte"; 
	import dayjs from 'dayjs';
	import TaskList from "$lib/taskList.svelte";
	let isChecked = false;
  </script>
  
  <div class="p-4 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto">
	<!--اللي سويناه لما فصلنا الاكواد اسمه component-->
	<Header />
	<Input />
    <TaskList/>
  </div>

  