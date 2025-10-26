import { Component } from "solid-js"

interface TabsProps {}

export const Tabs: Component<TabsProps> = props => {
	return (
		<div class="tabs">
			<Tab />
			<Tab active={true} />
		</div>
	)
}

interface TabProps {
	active?: boolean
}

const Tab: Component<TabProps> = props => {
	return (
		<div class={"tab" + (props.active ? ' active' : '')}>
			<div class="indicator"></div>
			Tab
		</div>
	)
}