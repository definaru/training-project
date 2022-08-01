import React from 'react'
import ReactDOM from 'react-dom'
import Application from './Application'
import reportWebVitals from './reportWebVitals'
import '../src/styles.css'

const app = document.getElementById('demo')
const application = <Application />
ReactDOM.render(application, app)

reportWebVitals()