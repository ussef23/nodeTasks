const yargs = require('yargs')
const tasks = require('./tasks.js')

// Customize yargs version
yargs.version('1.1.0')


// Create filter command
yargs.command({
    command: 'filter',
    describe: 'filtering animals list',
    builder: {
        str: {
            describe: 'filter str',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        tasks.filterData(argv.str)
    }
})

// Create count command
yargs.command({
    command: 'count',
    describe: 'count peoples and animals',
    handler() {
        tasks.count()
    }
})

yargs.parse()