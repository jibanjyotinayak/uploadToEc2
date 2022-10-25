const express =  require ('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/users',(req,res)=>{
    res.send('hello users')
})


app.listen(8000,()=>{
    console.log('server is running on 8000')
})