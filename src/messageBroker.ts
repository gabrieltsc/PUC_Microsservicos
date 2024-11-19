import client from 'amqplib';
import dotenv from 'dotenv';
dotenv.config();

export const FILA = 'mensagens';

export const TOPICO = 'eventos';

export async function conectar() {
    const url = 'amqp://' 
        + process.env.AMQP_USERNAME + ':' + process.env.AMQP_PASSWORD 
        + '@' + process.env.AMQP_HOST + ':' + process.env.AMQP_PORT;
    const connection = await client.connect(url);
    return await connection.createChannel();
}