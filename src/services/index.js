import axios from "axios";
import TaskService from "./tasks"

const httpClient = axios.create({
  baseURL: 'http://localhost:3000'
})

export default{
  tasks: TaskService(httpClient)
}