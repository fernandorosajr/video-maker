const readline = require('readline-sync')

function start(){
    const content = {}
    content.searchTerm = askAddReturnSearchTerm()
    content.prefix = askAddReturnPrefix()

    function askAddReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term:')
        //return 'TERM EXEMPLE'
    }

    function askAddReturnPrefix(){
        const prefixes = ['Who is', 'What is','The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Chose one option: ')
        const selectedPrefixText =prefixes[selectedPrefixIndex]

        return selectedPrefixText
        //console.log(selectedPrefixIndex + " " + selectedPrefixText) 
    }


    console.log(content)
}

start()

