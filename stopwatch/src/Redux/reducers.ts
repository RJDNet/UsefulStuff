export const reducer = (state = { running: false, time: 0 }, action: { type: string }) => {
  switch (action.type) {
    case 'START': return Object.assign({}, state, { running: true });
    case 'STOP': return Object.assign({}, state, { running: false });
    case 'TICK': return Object.assign({}, state, { time: state.time + (state.running ? 1 : 0) });
    case 'RESET': return Object.assign({}, state, { running: false, time: 0 });
    default: return state;
  }
};
