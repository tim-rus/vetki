import Icon from "../ui/Icon"
import { SideNav } from "./SideNav"
import { Tabs } from "./Tabs"

export default function Layout(props) {
	return (
		<div class="layout">
			<SideNav />
			<div class="workspace">
				<div class="title-bar">
					<Tabs />
					<div class="title-rest"></div>
					<div class="window-controls">
						<button><Icon name="minus" /></button>
						<button><Icon name="copy" /></button>
						<button><Icon name="x" /></button>
					</div>
				</div>
				<div class="content">
					{props.children}
				</div>
			</div>
		</div>
	)
}
