// pocketbase.ts
import createPool from 'pocketbase';

export const pool = new createPool({
    client: 'pg', // Specify the client type (PostgreSQL in this case)
    connection: {
        database: 'your_database_name',
        user: 'your_username',
        password: 'your_password',
        host: 'your_database_host',
        port: 5432, // or your database port
    },
});
