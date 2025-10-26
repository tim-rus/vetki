import { Component } from "solid-js"
import { Browser } from "./Browser"

interface SideNavProps {}

export const SideNav: Component<SideNavProps> = props => {
	return (
		<div class="side-nav">
			<div class="side-nav-links">
				<div class="side-nav-links-header">links head</div>
				<div class="side-nav-links-main">links top</div>
				<div class="side-nav-links-bottom">links bottom</div>
			</div>
			<Browser />
		</div>
	)
}