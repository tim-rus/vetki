import { createEffect } from "solid-js"

interface IconProps {
	//
	name:string
	size?:number
}

export default function Icon(props:IconProps) {
	let iconDiv;
	createEffect(async ()=>{
		const res = await fetch("./icons/" + props.name + ".svg")
		if (!res.ok) {
			return
		}
		const txt = await res.text();
		(iconDiv as HTMLDivElement).innerHTML = txt
	})
	return (
		<div ref={iconDiv} class="ui-icon" style={{width: props.size + "px", height: props.size + "px"}}>
		</div>
	)
}