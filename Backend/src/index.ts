import { AppDataSource } from "./data-source"
import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import cors from "cors";


import { notFound, errorHandler } from './middleware/errorMiddleware'
import { companyRouter } from './routes/companyRoute'
import { userRouter } from './routes/userRoute'
import { roleRouter } from "./routes/roleRoute";


const app = express()
app.use(express.json())
dotenv.config()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

 app.use(cors(corsOptions)) // Use this after the variable declaration

 app.use(cookieParser());

//Test server route
app.get('/', (req, res) => res.send('Hello World'))


//Router middleware
app.use('/api/v1/company', companyRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/roles', roleRouter)




//Error Middleware
app.use(notFound);
app.use(errorHandler);


//Connect to server
app.listen(process.env.PORT, async () => {
    console.log('server running at http://localhost:5000')
    try {
        //Connect to database
        await AppDataSource.initialize()
        console.log('Database Connected')
    } catch (error) {
        console.error(error,'Unable to connect to database')
    }
})
