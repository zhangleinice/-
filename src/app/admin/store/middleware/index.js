// export const logger = store = next = action => {
//     console.log('dispatching', action)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
// }

export function logger(store) {
    return function wrapDispatchToAddLogging(next) {
      return function dispatchAndLog(action) {
        console.log('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        return result
      }
    }
}