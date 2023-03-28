export default (httpClient) => ({
  getTasks: async () => {
    const response = await httpClient.get('/tasks')

    return {
      data: response.data
    }
  },
  createTask: async (task) => {
    const response = await httpClient.post('/tasks', task)

    return {
      data: response.data
    }
  }, 
  deleteTask: async (taskId) => {
    await httpClient.delete(`/tasks/${taskId}`)
  },
  toggleFavStatus: async(task) => {
    
    await httpClient.patch(`/tasks/${task.id}`, {isFav: task.isFav})
  }  
})