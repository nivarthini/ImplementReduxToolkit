import React from 'react'
import { useSelector } from 'react-redux'

export default function StudentList() {
    const students = useSelector((state) => state.student.students)
return (
    <div>
        <div className="list-container">
            <h2>Registered Student</h2>
            {students.length == 0? (
                <p className ="empty"> No Students Registered Yet</p>
            ):(
                <div className="student-list">
                    {students.map((student, index)=>{
                        return(
                            <div className="student-card">
                                <h3>{student.name}</h3>
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Phone:</strong> {student.phone}</p>
                                <p><strong>City:</strong> {student.city}</p>
                                <p><strong>Role:</strong> {student.role}</p>
                            </div>
                        )})}
                </div>
            )}
        </div>
    </div>
)
}
