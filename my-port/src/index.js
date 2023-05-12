import React from "react";
import  ReactDOM from "react-dom/client";
import App from "./App";



/*lets onw render thr app into our root div...*/

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

//restart the app in the terminal...


function index() {
  return (
    <div>index</div>
  )
}

export default index

