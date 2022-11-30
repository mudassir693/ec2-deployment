import express from 'express'


const app = express()

app.get('/',(req,res)=>{
    try {
        return res.status(200).json({data:"everything works fine and code update", error:false})
    } catch (error) {
        console.log(error)
        return res.status(500).json({data:"check console: error", error:true})
    }
})

const port = process.env.port ||5000
app.listen(port,()=>{
    console.log('server running on port ',port)
})