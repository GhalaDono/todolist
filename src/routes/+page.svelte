<script lang="ts">
	import dayjs from 'dayjs';
	import 'dayjs/locale/ar-sa';

	dayjs.locale('ar-sa');
	let period=dayjs().format('a')=='م'? 'مساء':'صباح';
</script>

<div class="p-12">
	<header class="flex justify-between"> 
		<div>
		<h1 class="text-4xl  text-black">
	   {period} الخير 👋
		</h1>
		<h2 class="text-2xl text-[#6e6f6f] mt-3">
       {dayjs().format('اليوم، dddd D MMMM YYYY')}
		</h2>
	</div>

	<div class="bg-[#ffffff] h-[3.2rem] w-44 rounded-md">

	</div>
	</header>
</div>