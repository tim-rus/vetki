import { Component, JSX } from "solid-js"
import Icon from "../ui/Icon"

interface SideNavProps {
	children: JSX.Element
}

export const SideNav: Component<SideNavProps> = props => {
	return (
		<div class="side-nav">
			<div class="side-nav-links">
				<div class="side-nav-links-main">
					<SidNavLink icon="menu" border />
					<SidNavLink icon="search" active />
					<SidNavLink icon="folders" />
				</div>
				<div class="side-nav-links-bottom">
					<SidNavLink icon="user" />
					<SidNavLink icon="settings" />
				</div>
			</div>
			<div class="side-nav-content">
				{props.children}
			</div>
		</div>
	)
}

interface SidNavLinkProps {
	icon: string
	border?: boolean
	active?: boolean
}

const SidNavLink: Component<SidNavLinkProps> = props => {
	return (
		<button class={"side-nav-link" + (props.border ? " with-border" : "") + (props.active ? " active" : "")}>
			<div class="indicator"></div>
			<Icon name={props.icon} />
		</button>
	)
}