<script>
  import dayjs from "dayjs";
  import { tasks } from "$lib/stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import TaskItems from "$lib/taskItems.svelte";
  import { initializeStores, Modal } from "@skeletonlabs/skeleton";

  initializeStores();

  dayjs.extend(relativeTime);
</script>

<ol class="gap-2 flex flex-col">
  <h3>المهام المتبقية:</h3>
  <!-- من خلال شركط معين بنخلي هنا بس المهام اللي ما عليها صح-->

  <TaskItems doneTask={false} />
  <!-- عشان استخدم هذا المتغير هنا خليته اكسبورت-->
</ol>

<ol class="gap-2 flex flex-col">
  <h3>المهام المكتملة:</h3>
  <!-- من خلال شركط معين بنخلي هنا بس المهام اللي ما عليها صح-->

  <TaskItems doneTask={true} />
</ol>
