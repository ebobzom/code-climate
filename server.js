import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}))


const pool = new Pool({
    
    user: 'postgres',
    host: 'localhost',
    database: 'test2',
    password: 'woody4real',
    port: 5432,
  });

app.post('/', (req,res) => {
    const {firstName, lastName, email} = req.body;
    const text = 'INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING id, first_name, last_name, email';
    const results = [firstName, lastName, email]
    pool.query(text, results)
    .then(ans => {
        res.status(201).json({ ans: ans.rows})
        pool.end()
    })
    .catch(e => console.log(e))

});

// use this if you want to run server while your test is also running your test, else stop app running before testing
if(!module.parent){
    app.listen(port, () => {
        console.log('app running')
    })
}

// app.listen(port, () => {
//     console.log('app running')
// })


module.exports = app;


