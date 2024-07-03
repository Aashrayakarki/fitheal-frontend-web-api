import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { createMealApi, deleteMealApi, getAllMeals } from '../../../apis/Api';

const MealplanAdmin = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        //get all exercises
        getAllMeals().then((res) => {
            //response: res.data.products
            setMeals(res.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(meals)

    const [mealImage, setMealImage] = useState('')
    const [previewImage, setPreviewImage] = useState('')

    const [mealName, setMealName] = useState('')
    const [mealCalories, setMealCalories] = useState('')
    const [mealProteins, setMealProteins] = useState('')
    const [mealCarbs, setMealCarbs] = useState('')
    const [mealTime, setMealTime] = useState('')

    const handleImage = (e) => {
        const file = e.target.files[0]
        setMealImage(file)
        setPreviewImage(URL.createObjectURL(file))
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('mealName', mealName)
        formData.append('mealCalories', mealCalories)
        formData.append('mealProteins', mealProteins)
        formData.append('mealCarbs', mealCarbs)
        formData.append('mealTime', mealTime)
        formData.append('mealImage', mealImage)

        console.log(formData.get('mealImage'))
        console.log(formData.get('mealName'))
        console.log(formData.get('mealCalories'))
        console.log(formData.get('mealProteins'))
        console.log(formData.get('mealCarbs'))
        console.log(formData.get('mealTime'))

        createMealApi(formData).then((res) => {
            if (res.status === 201) {
                toast.success(res.data.message)
            }
        }).catch((error) => {
            //for error status code
            if (error.response) {
                if (error.response.status === 400) {
                    toast.warning(error.response.data.message)
                } else if (error.response.status === 500) {
                    toast.error(error.response.data.message)
                } else {
                    toast.error('Something went wrong')
                }
            } else {
                toast.error('Something went wrong')
            }
        })

    }

    //Handle delete product
    const handleDelete = (id) => {
        const confirmDialog = window.confirm('Are you sure you want to delete this meal?')
        if (confirmDialog) {
            //calling api
            deleteMealApi(id).then((res) => {
                if (res.status === 201) {
                    toast.success(res.data.message)
                    window.location.reload()

                }
            }).catch((error) => {
                if (error.res.status === 500){
                    toast.error(error.res.data.message)
                }
            })
        }
    }


    return (
        <>
            <div className='container mt-3'>
                <div className='d-flex justify-content-between'>

                    <button type="button" className="btn orange-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add meal plan
                    </button>

                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Create a new meal plan</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action=''>
                                        <label>Meal Name</label>
                                        <input onChange={(e) => setMealName(e.target.value)} type="text" className='form-control' placeholder='Enter meal name'></input>

                                        <label className='mt-2'>Meal Time</label>
                                        <input onChange={(e) => setMealTime(e.target.value)} type="number" className='form-control' placeholder='Enter meal time'></input>

                                        <label className='mt-2'>Meal Calories</label>
                                        <input onChange={(e) => setMealCalories(e.target.value)} type="number" className='form-control' placeholder='Enter meal calories'></input>

                                        <label className='mt-2'>Meal Proteins</label>
                                        <input onChange={(e) => setMealProteins(e.target.value)} type="number" className='form-control' placeholder='Enter meal proteins'></input>

                                        <label className='mt-2'>Meal Carbs</label>
                                        <input onChange={(e) => setMealCarbs(e.target.value)} type="number" className='form-control' placeholder='Enter meal carbs'></input>

                                        <label className='mt-2'>Choose meal image</label>
                                        <input onChange={handleImage} type='file' className='form-control'/>
                                        {
                                            previewImage && <img src={previewImage} className='img-fluid rounded mt-2'></img>
                                        }


                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Image</th>
                            <th>Meal Name</th>
                            <th>Calories</th>
                            <th>Proteins</th>
                            <th>Carbs</th>
                            <th>Time</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                            meals.map((singleMeal) => (
                                <tr>
                                    <td><img width={'40px'} height={'40px'} src={`http://localhost:5000/products/${singleMeal.mealImage}`} alt='' /></td>
                                    <td>{singleMeal.mealName}</td>
                                    <td>{singleMeal.mealCalories}</td>
                                    <td>{singleMeal.mealProteins}</td>
                                    <td>{singleMeal.mealCarbs}</td>
                                    <td>{singleMeal.mealTime}</td>
                                    <td>
                                        <Link to={`/admin/update_meal/${singleMeal._id}`} className="btn orange-btn">Edit</Link>
                                        <button onClick={() => handleDelete(singleMeal._id)} className="btn btn-dark ms-1">Delete</button>
                                    </td>
                                </tr>
                            )
                            )
                        }
                    </tbody>
                    
                </table>

            </div>
        </>
    );
};

export default MealplanAdmin;