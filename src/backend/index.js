var express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.json(
        
            {
                src : "",
                name : ""
            },
            {
                src : "",
                name : ""
            },
            {
                src : "",
                name : ""
            }
        
    )
})

app.listen(5000, ()=>{
    console.log("App listening on port 5000");
})