import express from 'express';
import {join} from 'path';
import connectDb from './db/dbConnect.js';
import router from './routes/web.js';

const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'

connectDb(DATABASE_URL)

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(join(process.cwd(), 'public')))

app.use('/', router)

app.listen(port, () => {
    console.log(`Server Running @ http://localhost:${port}`)
})