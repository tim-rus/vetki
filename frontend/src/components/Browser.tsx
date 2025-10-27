import { Component, JSX } from "solid-js"
import { useState } from "../store"

interface BrowserProps {
	children?: JSX.Element
}

export const Browser: Component<BrowserProps> = props => {
	//
	let ref;
	//
	const {state, update} = useState()!

	const mousedown = (e:MouseEvent) => {
		window.addEventListener('mousemove', mousemove)
		window.addEventListener('mouseup', mouseup);
		(ref as HTMLDivElement).classList.add('active')
	}
	const mousemove = (e:MouseEvent) => {
		const w = state.window.browserWidth + e.movementX
		if (w > state.window.browserMinWidth) {
			update.browserSetWidth(w)
		}
		console.log(w)
	}
	const mouseup = (e:MouseEvent) => {
		window.removeEventListener('mousemove', mousemove)
		window.removeEventListener('mouseup', mouseup);
		(ref as HTMLDivElement).classList.remove('active')
	}

	return (
		<div class={"browser" + (state.window.browserShow ? "" : " hide")} style={{width: state.window.browserWidth + 'px'}}>
			<div class="browser-content">
				{props.children}
			</div>
			<div 
				ref={ref}
				onmousedown={mousedown} 
				class="browser-handle" 
				style={{left: (state.window.browserWidth-2) + 'px'}}
			/>
		</div>
	)
}