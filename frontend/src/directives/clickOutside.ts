import { Accessor, onCleanup } from 'solid-js';

declare module "solid-js" {
	namespace JSX {
		interface Directives {
			clickOutside: (value: Accessor<() => void>) => void;
		}
	}
}

export default function clickOutside(
	el: HTMLElement,
	accessor: Accessor<() => void>
) {
	const handler = (event: MouseEvent) => {
		if (!el.contains(event.target as Node)) {
			accessor()(); // Call the provided callback
		}
	};

	document.addEventListener("click", handler);

	// Cleanup on element unmount
	onCleanup(() => {
		document.removeEventListener("click", handler);
	});
}