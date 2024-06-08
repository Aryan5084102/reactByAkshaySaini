import React from "react"
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1",
 {id: "heading", xyz: "abc"},
  "Hello World from React")
  console.log(heading)
        const addRoot = ReactDOM.createRoot(document.getElementById("root"))
        addRoot.render(heading)


const parent = React.createElement("div", {id: "parent"}, 
   React.createElement("div",{id: "child1"},[
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
      ])
)

const addRoot1 = ReactDOM.createRoot(document.getElementById("root"))
addRoot1.render(parent)