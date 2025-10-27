import { createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";

interface State {
	test:string

	//
	window: {
		browserMinWidth: number
		browserWidth: number
		browserShow: boolean
	}
}

interface StateUpdateType {
	makeChange():void

	//
	browserToggle():void
	browserSetWidth(w:number): void
}

const StateContext = createContext<{ state:State, update:StateUpdateType }>();

export function StateProvider(props) {
	const [state, setState] = createStore<State>({
		test: "SOME",
		window: {
			browserWidth: 320,
			browserMinWidth: 200,
			browserShow: true
		}
	} as State)

	const update = {
		makeChange() {
			setState(
				produce((s:State)=>{
					s.test = "CHANGE"
				})
			)
		},
		browserSetWidth(w:number) {
			setState(
				produce((s:State)=>{
					s.window.browserWidth = w
				})
			)
		},
		browserToggle() {
			setState(
				produce((s:State)=>{
					s.window.browserShow = !s.window.browserShow
				})
			)
		},
	} as StateUpdateType

	return (
		<StateContext.Provider value={{state, update}}>
			{props.children}
		</StateContext.Provider>
	);
}

export function useState() { return useContext(StateContext); }