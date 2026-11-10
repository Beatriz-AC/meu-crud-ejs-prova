import pg from 'pg';

const { Pool } = pg;

// Ajuste as credenciais conforme a sua instalação local do PostgreSQL
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'clinica_bd',
    password: 'senai',
    port: 5432,
});

export default pool;