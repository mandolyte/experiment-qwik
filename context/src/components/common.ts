
import {
    createContext,
} from '@builder.io/qwik';
  
export interface stateIF {
    count: number;
}
  
// Create a new context descriptor
export const MyContext = createContext<stateIF>('my-context');

export default MyContext;