import { defineStore } from "pinia";
import services from "../services";
import delay from "../utils/delay";

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    isLoading: false
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
    async getTasks() {
      try {
        this.isLoading = true
        await delay(2000)
        const response = await services.tasks.getTasks()
        this.tasks = response.data
        return;
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async addTask(task) {
      try {
        this.isLoading = true
        await delay(2000)

        const addedTask = await services.tasks.createTask(task)

        this.tasks.push(addedTask)

      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading =false
      }
    },
    async deleteTask(taskId) {
      try {
        this.isLoading = true
        await delay(2000)
        this.tasks = this.tasks.filter((task) => task.id !== taskId)
        
        services.tasks.deleteTask(taskId)
        
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async toggleFav(taskSelected) {
      try {
        this.isLoading = true
        await delay(1000)
        const task = this.tasks.find(task => task.id === taskSelected.id)
        task.isFav = !task.isFav
        
        await services.tasks.toggleFavStatus(task)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
})