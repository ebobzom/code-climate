const pg = require('pg');

const con = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'test2',
    password: 'woody4real',
    port: 5432,
  });
con.connect();
con.query('DROP table if exists users');
con.query('CREATE TABLE users(id serial primary key not null, first_name varchar(50) not null, last_name varchar(50) not null', () => {
    con.end()
});
