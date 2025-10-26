import { Component } from "solid-js"

interface BrowserProps {}

export const Browser: Component<BrowserProps> = props => {
	return (
		<div class="browser">
			<div class="browser-header">head</div>
			<div class="browser-content">cont</div>
			<div class="browser-footer">footer</div>
		</div>
	)
}