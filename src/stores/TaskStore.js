import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "buy milk",
        isFav: false
      },
      {
        id: 2,
        title: "play Gloomhaven",
        isFav: true
      }
    ],
    user: 'Patrick Monteiro'
  }),
  getters: {
    favs() {
      return this.tasks.filter((task) => task.isFav)
    },
    favCount() {
      return this.tasks.reduce((previousValue, currentValue) => {
        return currentValue.isFav ? previousValue + 1 : previousValue
      }, 0)
    },
    totalCount: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    addTask(task) {
      this.tasks.push(task)  
    },
    deleteTask(taskId){
      this.tasks = this.tasks.filter((task) => task.id !== taskId)
    },
    toggleFav(taskId) {
      const task = this.tasks.find(task => task.id === taskId) 
      task.isFav = !task.isFav
    }
  }
})