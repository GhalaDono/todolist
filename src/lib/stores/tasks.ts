import { persisted } from 'svelte-persisted-store';//طريقة غير مباشرة للتعامل مع لوكال ستورج عن طريق بكج 
export const tasks=persisted<Task[]>('tasks',[]);//اكسبورت بدل لتlet  , ولان خزنت برسستد بمتغير اقدر استخدم ميثود مثل ست وابديت
//مو فاهمة هالاكواد
