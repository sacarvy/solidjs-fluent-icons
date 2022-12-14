import { splitProps } from "solid-js"
function GlobeDesktopIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M10 18c.22 0 .45 0 .67-.03a2 2 0 01-1.56-1.32 4.2 4.2 0 01-1.13-1.56c-.22-.46-.4-1-.56-1.59H9v-1H7.2a14.87 14.87 0 010-5h5.6c.13.77.2 1.62.2 2.5h1c0-.87-.07-1.71-.2-2.5h2.74c.3.78.46 1.62.46 2.5h1a8 8 0 10-8 8zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3zM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 017.7 3.38c-.24.33-.45.7-.64 1.1zM6.2 7.5a15.97 15.97 0 000 5H3.46a6.98 6.98 0 010-5h2.73zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 01-3.77-3.11h2.45zm5.9-10.12a7.02 7.02 0 013.77 3.12h-2.45a10.5 10.5 0 00-.68-2.01c-.19-.4-.4-.78-.64-1.1zM10 12a1 1 0 011-1h7a1 1 0 011 1v4a1 1 0 01-1 1h-2v1h.5a.5.5 0 010 1h-4a.5.5 0 010-1h.5v-1h-2a1 1 0 01-1-1v-4z" />
		</svg>
	)
}
export default GlobeDesktopIcon
