import axios from "axios";

const instance = axios.create({ baseURL: 'http://localhost:8000/', timeout: 30000, headers: { Authorization: `Bearer ${localStorage.getItem('user')}` } });

const login=(data)=> instance.post('/',data)
const signup=(data)=> instance.post('/signup',data)
const addTodo=(data)=> instance.post('/to-do',data)
const fetchTodo=()=> instance.get('/to-do')
const updateTodo=(data)=> instance.patch('/to-do',data)
const removeTodo=(data)=> instance.delete(`/delete-to-do/${data}`)
const sendEmail=(data)=> instance.post('/forgot-password',data)
const checkOTP=(data)=> instance.put('/forgot-password',data)
const changePassword=(data)=> instance.patch('/forgot-password',data)



export {
    login, 
    signup,
    addTodo,
    fetchTodo,
    removeTodo,
    updateTodo,
    sendEmail,
    checkOTP,
    changePassword
}