<script lang="ts">
 import Header from "$lib/header.svelte";
 import {name} from "$lib/stores/name";

/*function h(name:string):string{
	return name+1;

}*/
//arrow function
name.update((name:string)=>//السهم يسوي ريتيرن لبدي الميثود
{return name+1;})



//name.set('hello')
//name.update(هنا نحط الميثود اللي نبيه ينطبع ، فإذا كان نفس السيت فاشالفايدة؟ انه لو ابي  اضيق قيم وبنفس الوقت القيم القديمة محفوظة)

console.log($name);

 /*let array=[
	'a',
	'b',
	'c',
 ];
 array.push('d');//a,b,c,d
 let index=array.indexOf('d');
 array.splice(index,1);*/ //1 هو عدد العنصر
//console.log(array);
</script>

<div class="m-12 flex flex-col gap-8">
	<!--اللي سويناه لما فصلنا الاكواد اسمه component-->
	<Header/>
	
	<div class="input-group input-group-divider  flex justify-between">
		<input class="flex-1 !bg-white" type="search" placeholder="إدخال مهام" />
		<button class="variant-filled-secondary">إضافة</button>
	</div>
</div>
