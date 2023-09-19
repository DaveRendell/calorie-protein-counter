import { createRoot } from "react-dom/client"
import React from "react"
import "./styles/application.css"

var mountNode = document.getElementById("app")
const root = createRoot(mountNode!)
root.render(<h1>Hello, React!</h1>)