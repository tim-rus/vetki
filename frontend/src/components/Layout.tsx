import { Application, Window } from "@wailsio/runtime"
import { createSignal, onMount } from "solid-js"
import Icon from "../ui/Icon"
import { SideNav } from "./SideNav"
import { Tabs } from "./Tabs"

export default function Layout(props) {
	
	// max/restore button
	const [icon, setIcon] = createSignal("square")
	const makeIcon = async () => setIcon(await Window.IsMaximised() ? "copy" : "square")
	onMount(()=>{
		makeIcon()
		window.addEventListener('resize', makeIcon)
	})

	//
	return (
		<div class="layout">
			<SideNav />
			<div class="workspace">
				<div class="title-bar">
					<Tabs />
					<div class="title-rest"></div>
					<div class="window-controls">
						<button onclick={Window.Minimise}><Icon name="minus" /></button>
						<button onclick={Window.ToggleMaximise} class="flip"><Icon name={icon()} /></button>
						<button onclick={Application.Quit} class="danger"><Icon name="x" /></button>
					</div>
				</div>
				<div class="content">
					{props.children}
				</div>
			</div>
		</div>
	)
}