const pg = require('pg');

const con = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'test2',
    password: 'woody4real',
    port: 5432,
  });
con.query('DROP table if exists users')
.then(ans => console.log('ok'))
.catch(e => console.log(e))
con.query('CREATE TABLE users(id serial primary key not null, first_name varchar(50) not null, last_name varchar(50) not null, email varchar not null)')
.then(ans => console.log('ok'))
.catch(e => console.log(e))
