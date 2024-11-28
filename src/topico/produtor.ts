import * as readline from 'readline/promises';
import { conectar, TOPICO } from '../messageBroker';
const read = readline.createInterface(
    { input: process.stdin, output:process.stdout });

async function main() {
    const canal = await conectar();
    await canal.assertExchange(TOPICO, 'topic', { durable: false });

    while (true) {
        const mensagem = await read.question ('Qual a mensagem? ');
        if (mensagem.toLocaleLowerCase() == 'sair') { process.exit(0); }
        canal.publish(TOPICO, '', Buffer.from(mensagem));
        console.log(`Mensagem enviada para o tópico '${TOPICO}'\n`);
    }
}

main();