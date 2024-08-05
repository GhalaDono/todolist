<script lang="ts">
  import { tasks } from "$lib/stores/tasks";
  import dayjs from "dayjs";
  import relativeTime from "dayjs/plugin/relativeTime";
 
  dayjs.extend(relativeTime);

  export let doneTask: boolean; //قيمة المتغير حتكون بالكومبوننتس
</script>

{#each $tasks as task}
  {#if task.taskStatus == doneTask}<!-- السينتاكس حق الشرط بالhtml -->
    <!-- هنا لو سوينا شيكد بيكون ترو فتتقارن بنفس الوقت مع القيم اللي مررناها من خلال دن تاسك واللي هي فال وترو فراح تشبه ترو فتروح لمكان ترو الللي هو المكتملة-->
    <li class="bg-white p-2 rounded-md flex justify-between items-center">
      <div>
        <!--  bind:checked={task.taskStatus} عشان نحفظ الشيكد لما احدث الصفحة -->
        <input
          bind:checked={task.taskStatus}
          class="checkbox h-6 w-6 border-solid border-2"
          type="checkbox"
        />
        <span class="mr-2">
          {task.title}
        </span>
      </div>
      <div class="flex gap-2">
        <button class="btn variant-filled-success">
          {dayjs().to(dayjs(task.taskDate))}
          <!-- dayjs(task.taskDate).format('hh:mm') -->
        </button>
        <button class="btn variant-filled-success p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            viewBox="0 0 48 48"
            ><path
              fill="currentColor"
              d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm-3.841 26.147a4.75 4.75 0 0 0 4.733 4.353h11.216a4.75 4.75 0 0 0 4.734-4.353L36.324 13.5H11.676zM21.5 20.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25"
            /></svg
          >
        </button>
      </div>
    </li>
  {/if}
{/each}
