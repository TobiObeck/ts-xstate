import './styles/index.scss'
import { Machine, interpret } from 'xstate'
import { templateMachine } from './ts/TemplateMachine'

const service = interpret(templateMachine)
    .onTransition(state => {
        console.log(state.value)
    })
    .start();

document.getElementById('openBtn').addEventListener('click', function () {
    service.send('OPEN');
});
const app = document.getElementById('#root')
