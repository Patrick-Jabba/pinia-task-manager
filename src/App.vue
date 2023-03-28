<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia';
  import { useTaskStore } from './stores/TaskStore'
  
  import TaskDetails from '@/components/TaskDetails.vue'
  import TaskForm from '@/components/TaskForm.vue';
  import Loader from '@/components/Loader/index.vue'

  const taskStore = useTaskStore()
  const { tasks, isLoading, favs, favCount, totalCount } = storeToRefs(taskStore)
  const filter = ref('all')

  taskStore.getTasks()

</script>

<template>
  <main>

    <!-- heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Fav tasks</button>
    </nav>

    <!-- loading -->
    <Loader :isLoading="isLoading" />

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'" >
    <p> You have {{ totalCount }} tasks left to do.</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs task left to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="filter">
      <button
        @click="taskStore.$reset"
      >
        Reset list
      </button>
    </div>
  </main>
</template>