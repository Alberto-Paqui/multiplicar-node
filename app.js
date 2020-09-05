//requerimientos:
// const fs = requiere("express")
// const fs = requiere("./fs")

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },
    })
    .command('crear', 'genera una archivo con la tabla multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        },
    })
    .help()
    .argv;


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('comando no reconocido');
}




//console.log(process.argv)
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log('Limite', argv.limite)