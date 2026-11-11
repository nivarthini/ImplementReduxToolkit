import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from './StudentSlice'

export default function StudentForm() {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        role: ""
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!formData.name || !formData.email || !formData.phone || !formData.city || !formData.role)
        {
            alert("Please fill all the fields")
            return
        }
        dispatch(addStudent(formData))
        alert("Student Registered Successfully")

        setFormData({
            name: "",
            email: "",
            phone: "",
            city: "",
            role: ""
        })
    }
return (
    <div>
        <div className="form-container">
            <h2>Student Registration</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter ur Name" value={formData.name} onChange={handleChange}/>
                <input type="email" name="email" placeholder="Enter ur Email" value={formData.email} onChange={handleChange}/>
                <input type="tel" name="phone" placeholder="Enter ur Phone" value={formData.phone} onChange={handleChange}/>
                <input type="text" name="city" placeholder="Enter ur city" value={formData.city} onChange={handleChange}/>
                <select name="role" value={formData.role} onChange={handleChange}>
                    <option value="">Select Role</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="Student">Student</option>
                </select>
                <button type="submit">Register Student</button>

            </form>
        </div>
    </div>
)
}
