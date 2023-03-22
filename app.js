import readline from 'node:readline'
import { stdin as input, stdout as output } from 'node:process'
import chalk from 'chalk'
const log = console.log
const red = chalk.red
const blue = chalk.blue
const green = chalk.green
const yellow = chalk.yellow
const white = chalk.white
const saida = []
const rl = readline.createInterface({ 
    input, 
    output,
    prompt:`
    ${yellow(`Quais atributos deseja adcionar a lista ${red('?')}
    Digite um novo item no terminal e pressiona a tecla ${green('Enter')}
    Saia a qualquer momento com a palavra ${red('sair')}`)}
    `
})
rl.prompt()
    rl.on('line', (atributoCSS) => {
    if(atributoCSS === 'sair')
        {saida.sort()
        log(chalk.blue(`Os items adcionados foram ${red(':')}`))
        return saida.forEach(element => {
        log(green(element))
        })
    }
        log(`${white('Você adcionou')} ${red(':')} ${green(atributoCSS)}`)
        saida.push(atributoCSS)
  })
