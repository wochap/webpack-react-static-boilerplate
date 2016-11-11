import {combineReducers} from 'redux'

import * as reducers from 'app/reducers'

const rootReducer = combineReducers({
  ...reducers
})

export default rootReducer