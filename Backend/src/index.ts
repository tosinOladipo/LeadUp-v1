import { AppDataSource } from "./data-source"
import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';


import { notFound, errorHandler } from './middleware/errorMiddleware'
import { companyRouter } from './routes/companyRoute'
import { userRouter } from './routes/userRoute'


const app = express()
app.use(express.json())
dotenv.config()

app.use(cookieParser());

//Test server route
app.get('/', (req, res) => res.send('Hello World'))


//Router middleware
app.use('/api/v1/company', companyRouter)
app.use('/api/v1/users', userRouter)


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
