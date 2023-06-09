import { SAMPLE_TITLES, LOADING} from "../actions/action"

const initialState = {
  loading: false,
  initialTitles: {}
}

interface actionType {
  type: string
  payload: any
}

export const rootReducer = (state= initialState, action:actionType) => {  
  switch (action.type) {
    case LOADING:
      return  {
        ...state,
        loading: true,
        }
        case SAMPLE_TITLES:
          return  {
            ...state,
            loading: false,
            initialTitles: action.payload
          }        
      default:
        return state;
      }
    }; 
