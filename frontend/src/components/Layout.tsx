import { Browser } from "./Browser"
import { TitleBar } from "./TitleBar"

export default function Layout(props) {
	return (
		<div class="layout">
			<TitleBar />
			<div class="workspace">
				<Browser children={"some"} />
				<div class="content">
					{props.children}
				</div>
			</div>
		</div>
	)
}