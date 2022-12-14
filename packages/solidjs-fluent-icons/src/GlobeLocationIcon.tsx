import { splitProps, ComponentProps, JSX } from "solid-js"

function GlobeLocationIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 18a8 8 0 002.5-.4 8.14 8.14 0 01-.98-1.63c-.5.7-1.03 1.03-1.52 1.03-.66 0-1.4-.59-2.02-1.9-.22-.47-.4-1.01-.56-1.6H11c.02-.34.06-.68.14-1H7.21a14.87 14.87 0 010-5h5.58c.12.7.2 1.46.2 2.26.3-.2.64-.38 1-.5-.03-.61-.1-1.2-.18-1.76h2.73c.21.55.35 1.13.42 1.74.37.12.72.3 1.04.51A8 8 0 1010 18zm0-15c.66 0 1.4.59 2.02 1.9.22.47.4 1.01.56 1.6H7.42c.15-.59.34-1.13.56-1.6C8.59 3.6 9.34 3 10 3zM7.07 4.49c-.27.59-.5 1.27-.68 2.01H3.94A7.02 7.02 0 017.7 3.38c-.24.33-.45.7-.64 1.1zM6.2 7.5a15.97 15.97 0 000 5H3.46a6.98 6.98 0 010-5h2.73zm.2 6c.17.74.4 1.42.68 2.01.19.4.4.78.64 1.1a7.02 7.02 0 01-3.77-3.11h2.45zm5.9-10.12a7.02 7.02 0 013.77 3.12h-2.45a10.5 10.5 0 00-.68-2.01c-.19-.4-.4-.78-.64-1.1zM19 13.68c0-2.03-1.47-3.68-3.5-3.68-2.03 0-3.5 1.65-3.5 3.68 0 1.53.98 3.53 3.26 5.24.14.1.34.1.49 0 2.27-1.7 3.25-3.71 3.25-5.24zm-2-.18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		</svg>
	)
}
export default GlobeLocationIcon
