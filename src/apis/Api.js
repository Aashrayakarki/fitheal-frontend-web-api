import axios from "axios";

//creating backend Config!
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": 'multipart/form-data',
    },
})

const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
    }
}


//Test API
export const testAPI = () => Api.get('/')

//Register API
export const registerUserApi = (data) => Api.post('/api/user/register', data)

//Login API
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//Get User API
export const getSingleUser = (_id) => Api.get(`/api/user/get_single_user/${_id}`, config) // Use id parameter

//Update User API
export const updateUserApi = (data) => Api.put('/api/user/update_user', data, config)

//Create Exercise API
export const createExerciseApi = (data) => Api.post('/api/exercise/create', data)

//Get All Exercises API
export const getAllExercises = () => Api.get('/api/exercise/get_all_exercises', config)

//Get Exercise
export const getSingleExercise = (id) => Api.get(`/api/exercise/get_exercise/${id}`, config)

//Update Exercise
export const updateExerciseApi = (id, data) => Api.put(`/api/exercise/update/${id}`, data, config)

//Delete Exercise
export const deleteExerciseApi = (id) => Api.delete(`/api/exercise/delete/${id}`, config)

//pagination for exercises
export const paginationExercises = (page) => Api.get(`/api/exercise/pagination_exercise?page=${page}`, config)

//Create Meal Plan API
export const createMealApi = (data) => Api.post('/api/meal/create_meal', data)

//Get All Meal Plans API
export const getAllMeals = () => Api.get('/api/meal/get_all_meals')

//Get Meal Plan
export const getSingleMeal = (id) => Api.get(`/api/meal/get_meal/${id}`)

//Update Meal Plan
export const updateMealApi = (id, data) => Api.put(`/api/meal/update_meal/${id}`, data)

//Delete Meal Plan
export const deleteMealApi = (id) => Api.delete(`/api/meal/delete_meal/${id}`)

//pagination for meals
export const paginationMeals = (page) => Api.get(`/api/meal/pagination_meal?page=${page}`, config)

//http://localhost:5000/test