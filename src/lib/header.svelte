<script lang="ts">
import * as Skeleton from '@skeletonlabs/skeleton';

const { ListBox, ListBoxItem, popup } = Skeleton;
type PopupSettings = Skeleton.PopupSettings;

// @ts-ignore
    import dayjs from 'dayjs';
    import 'dayjs/locale/ar-sa';

    dayjs.locale('ar-sa');//عشان التاريخ يصير عربي
    //كيف الفنكشن ذا كيف يعرف الوفت بنفسه  
    let period = dayjs().format('a') == 'م' ? 'مساء' : 'صباح';

    //متغير يخزن القيمة المختارة من القائمة
let comboboxValue: string;

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				
</script>

<header class="flex justify-between">
    <div>
        <h1 class="font-bold text-3xl lg:text-4xl  text-black">
            {period} الخير 👋
        </h1>
        <h2 class="text-[1.055rem] lg:text-2xl text-[#6e6f6f] mt-3">
            {dayjs().format('اليوم، dddd D MMMM YYYY')}
        </h2>
    </div>
    
<!-- زر القائمة المنسدلة -->
<button class="btn variant-ghost-warning w-40 h-fit py-4 px-4 justify-between" use:popup={popupCombobox}>
	<span>{comboboxValue ?? 'جميع المهام'}</span>
	<span class="!m-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 rotated-counter-clockwise" viewBox="0 0 24 24"><path fill="currentColor" d="m4.296 12l8.492-8.727a.75.75 0 1 0-1.075-1.046l-9 9.25a.75.75 0 0 0 0 1.046l9 9.25a.75.75 0 1 0 1.075-1.046z"/></svg></span>
</button>

<!-- يظهر خيارات القائمة،وليه داخل -->
<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem><!--المهام اللي بالابيض هي المعروضة قبل لا اضغط بعد ما اضغط يصير بدل حميع المهم الشي اللي ضغطته واللي هو البرتقالي-->
		<ListBoxItem bind:group={comboboxValue} name="medium" value="مهام الغد">مهام الغد</ListBoxItem>
		
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />

    <style>
        .rotated-counter-clockwise {
            transform: rotate(-90deg);
        }
    </style>
    
</div>
					
</header>