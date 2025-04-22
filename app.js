const express=require('express');

const mongoose=require('mongoose');
const dotenv=require('dotenv');
const user=require('./routes/user');
const task=require('./routes/task');
dotenv.config()

const PORT=process.env.PORT || 3000;
const app=express();
app.use(express.json());

app.use('/api/v1',user);
app.use('/api/v1',task);

console.log(process.env.DB_LOCAL_URI);
console.log(process.env.PORT);
mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((con) => {
    console.log(`MongoDB connected with the host: ${con.connection.host}`);
}).catch((err) => {
    console.error(`Database connection failed: ${err.message}`);
    process.exit(1);
});



app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})