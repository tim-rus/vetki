import { Component, createEffect, createSignal, onMount } from "solid-js"
import { Tabs } from "./Tabs"
import { Application, Window } from "@wailsio/runtime"
import Icon from "../ui/Icon"
import { IconButton } from "../ui/IconButton"
import { useState } from "../store"

interface TitleBarProps {}

export const TitleBar: Component<TitleBarProps> = props => {
	//
	const {state, update} = useState()!

	// panel icon
	const [panelIcon, setPanelIcon] = createSignal("panel-left-open")
	createEffect(()=>{
		setPanelIcon(state.window.browserShow ? "panel-left-close" : "panel-left-open")
	})

	// max/restore button
	const [iconMaxRes, setIconMaxRes] = createSignal("square")
	const makeIconMaxRes = async () => setIconMaxRes(await Window.IsMaximised() ? "copy" : "square")
	onMount(()=>{
		makeIconMaxRes()
		window.addEventListener('resize', ()=>{makeIconMaxRes();})
	})

	return (
		<div class="title-bar">
			<div class="title-group" style={{width: state.window.browserShow ? state.window.browserWidth + 'px' : "max-content"}}>
				<div class="title-show-collapse">
					<IconButton icon={panelIcon()} onclick={update.browserToggle} />
				</div>
				<div class={"title-project" + (state.window.browserShow ? "" : " hide")}>
					<button class="project-selector">
						<Icon name="chevrons-up-down" />
						project
					</button>
					<div class="project-controls">
						<IconButton icon="folder-tree" />
						<IconButton icon="code-xml" />
						<IconButton icon="settings" />
						<IconButton icon="play" />
					</div>
				</div>
			</div>
			<Tabs />
			<div class="title-rest" ondblclick={Window.ToggleMaximise}></div>
			<div class="window-controls">
				<button onclick={Window.Minimise}><Icon name="minus" /></button>
				<button onclick={Window.ToggleMaximise} class="flip"><Icon name={iconMaxRes()} /></button>
				<button onclick={Application.Quit} class="danger"><Icon name="x" /></button>
			</div>
		</div>
	)
}