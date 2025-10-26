import { createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";

interface State {
	test:string
}

interface StateUpdateType {
	makeChange():void
}

const StateContext = createContext<{ state:State, update:StateUpdateType }>();

export function StateProvider(props) {
	const [state, setState] = createStore<State>({
		test: "SOME"
	} as State)

	const update = {
		makeChange() {
			setState(
				produce((s:State)=>{
					s.test = "CHANGE"
				})
			)
		}
	} as StateUpdateType

	return (
		<StateContext.Provider value={{state, update}}>
			{props.children}
		</StateContext.Provider>
	);
}

export function useState() { return useContext(StateContext); }