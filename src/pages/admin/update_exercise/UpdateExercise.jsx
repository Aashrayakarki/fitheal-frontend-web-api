import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getSingleExercise } from '../../../apis/Api'

const UpdateExercise = () => {
    // get id from url
    const { id } = useParams()

    // get product information (Backend)
    useEffect(() => {
        getSingleExercise(id).then((res) => {
            console.log(res.data)

            //res -> data (message, success, product) -> (pn, pp, pc)
            //res.data.product.productName
            setExerciseName(res.data.data.exerciseName)
            setExerciseTime(res.data.data.exerciseTime)
            setExerciseCalories(res.data.data.exerciseCalories)
            setExerciseLevel(res.data.data.exerciseLevel)
            setOldVideo(res.data.data.exerciseVideo)

        }).catch((error) => {
            console.log(error)
        })

    }, [])

    const [exerciseName, setExerciseName] = useState('')
    const [exerciseTime, setExerciseTime] = useState('')
    const [exerciseCalories, setExerciseCalories] = useState('')
    const [exerciseLevel, setExerciseLevel] = useState('')

    const [exerciseNewVideo, setExerciseNewVideo] = useState(null)
    const [previewNewVideo, setPreviewNewVideo] = useState(null)
    const [oldVideo, setOldVideo] = useState('')

    const handleVideo = (event) => {
        const file = event.target.files[0]
        setExerciseNewVideo(file)
        setPreviewNewVideo(URL.createObjectURL(file))
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('exerciseName', exerciseName)
        formData.append('exerciseTime', exerciseTime)
        formData.append('exerciseCalories', exerciseCalories)
        formData.append('exerciseLevel', exerciseLevel)

        if (exerciseNewVideo) {
            formData.append('exerciseVideo', exerciseNewVideo)

        }

        //Api call
        UpdateExercise(id, formData).then((res) => {
            if (res.status === 201) {
                toast.success(res.data.message)
            }
        }).catch((error) => {
            if (error.response.status === 500) {
                toast.error(error.response.data.message)
            }
            else if (error.response.status === 400) {
                toast.error(error.response.data.message)
            }
        })

    }

    return (
        <>
            <div className='container mt-3'>

                <h2>Update product for <span className='text-danger'>'{exerciseName}'</span></h2>
                <div className='d-flex gap-3'>
                    <form action="">
                        <label htmlFor="">Exercise Name</label>
                        <input value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} className='form-control' type="text" placeholder='Enter your exercise name' />

                        <label className='mt-2' htmlFor="">Exercise Time</label>
                        <input value={exerciseTime} onChange={(e) => setExerciseTime(e.target.value)} className='form-control' type="number" placeholder='Enter your exercise time' />

                        <label className='mt-2' htmlFor="">Exercise Calories</label>
                        <input value={exerciseCalories} onChange={(e) => setExerciseCalories(e.target.value)} className='form-control' type="number" placeholder='Enter your exercise calories' />

                        <label className='mt-2'>Choose level</label>
                        <select value={exerciseLevel} onChange={(e) => setExerciseLevel(e.target.value)} className='form-control'>
                            <option value="Beginner">Beginner</option>
                            <option value="Amateur">Amateur</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Elite">Elite</option>
                        </select>

                        <label className='mt-2'>Choose Video</label>
                        <input onChange={handleVideo} type="file" className='form-control' />

                        <button onClick={handleUpdate} className='btn btn-danger w-100 mt-2'>Update Exercise</button>

                    </form>
                    <div className='image section ms-3'>
                        <h6 className='mt-2'>Previewing Old Video</h6>
                        <img height={'170px'} width={'300px'} className='image-fluid rounded-4 object-fit-cover' src={`http://localhost:5000/products/${oldVideo}`} alt="" />

                        {
                            previewNewVideo && (
                                <>
                                    <h6 className='mt-2'>Previewing New Video</h6>
                                    <img height={'170px'} width={'300px'} className='image-fluid rounded-4 object-fit-cover' src={previewNewVideo} alt="image" />
                                </>
                            )
                        }

                    </div>
                </div>

            </div>
        </>
    )
}

export default UpdateExercise;