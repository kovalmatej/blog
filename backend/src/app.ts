import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('App is running')
})


const PORT: string = process.env.PORT || '5000'

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`)
})