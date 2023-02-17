
import {
    createContextId,
} from '@builder.io/qwik';
  
// this is "data model" for the app
export interface stateIF {
    count: number;
    text: string;
}
  
// Create a new context descriptor
export const GlobalContext = createContextId<stateIF>('global-context');

export default GlobalContext;