import { Machine } from 'xstate'

export const TemplateMachine = Machine({
  id: 'fetch',
  initial: 'idle',
  context: {
    retries: 0
  },
  states: {
    idle: {
      on: {
        OPEN: 'opened'
      }
    },
    opened: {
      on: {
        CLOSE: 'closed'
      }
    },
    closed: {
      on: {
        OPEN: 'opened'
      }
    }
  }
});

