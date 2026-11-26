// mysql 모듈 불러오기
const mysql = require('mysql/promise');

// DB 연결 설정
const dbConfig = {
    host: process.env.DBHOST, 
    user: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DATABASE,
}