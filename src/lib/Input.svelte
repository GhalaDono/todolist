<script lang="ts">
import {tasks} from "$lib/stores/tasks";
import dayjs from "dayjs";

/*function h(name:string):string{
	return name+1;
}*/
//arrow function
/*task.update((name:string)=>//السهم يسوي ريتيرن لبدي الميثود
{return name+1;})
console.log($task);*/
//name.set('hello')
 /*let array=[
	'a',
	'b',
	'c',
 ];
 array.push('d');//a,b,c,d
 let index=array.indexOf('d');
 array.splice(index,1);*/ //1 هو عدد العنصر
//console.log(array);

let title= "";

function addTask(){
	tasks.update((currentTasks)=>{
		currentTasks.push({
			title,
			taskDate:dayjs(),
			taskStatus:false,
		});
	return currentTasks;
});
title="";
}
</script>

<div class="input-group input-group-divider  flex justify-between"><!--الفلكس هنا شغلته يبعد زر الاضافة عن البحث وما يخليهم تحت بعض اما انبوت قروب يخليه بيضاوي-->
    <input bind:value={title} class="flex-1 !bg-white" type="search" placeholder="إدخال مهام" />
    <button on:click={addTask} class="variant-filled-secondary">إضافة</button>
</div>