<script setup>
import { onMounted } from 'vue';
import { useTaskStore } from '../stores/TaskStore';
  defineProps({
    task: Object
  })

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.getTasks()
})

</script>

<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i 
        @click="taskStore.deleteTask(task.id)" 
        class="material-icons"
      >
        delete
      </i>
      <i 
        @click="taskStore.toggleFav(task)" 
        class="material-icons"
        :class="{active: task.isFav}"
      >
        favorite
      </i>
    </div>  
  </div>
</template>
