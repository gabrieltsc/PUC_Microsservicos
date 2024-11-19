import { conectar, FILA } from '../messageBroker';

async function main() {
    const canal = await conectar();
    await canal.assertQueue(FILA);

    console.log(`Escutando mensagem na fila '${FILA}'...`);

    await canal.consume(FILA, msg => {
        console.log(`Mensagem recebida: ${msg.content}\n`);
        canal.ack(msg);
    });
}

main();