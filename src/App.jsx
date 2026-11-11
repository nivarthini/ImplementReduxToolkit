import React from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'
import store from './Store'
import {Provider} from 'react-redux'
import './App.css'

export default function App() {
  return (
    <div>
      <Provider store = {store}>
        <div className="app">
          <h1>Student Management System</h1>
          <StudentForm/>
          <StudentList/>
        </div>
      </Provider>
    </div>
  )
}
