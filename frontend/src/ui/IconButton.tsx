import { Component, JSX } from "solid-js"
import Icon from "./Icon"

interface IconButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: string
}

export const IconButton: Component<IconButtonProps> = props => {
	return (
		<button class="ui-icon-button" {...props}>
			<Icon name={props.icon} />
		</button>
	)
}