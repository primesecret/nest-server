module.exports = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity{.ts,.js}'], // 사용할 entity의 클래스명을 넣어둔다.
    synchronize: true, // false로 해두는 게 안전하다.
    logging: true
}