import { splitProps, ComponentProps, JSX } from "solid-js"

function GlobePersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.31 17.9A8 8 0 1118 10.33a3.02 3.02 0 00-1.02-.95c-.05-.66-.2-1.3-.43-1.89h-2.73c.1.6.16 1.25.18 1.9-.4.24-.74.56-1 .95a15.93 15.93 0 00-.2-2.85H7.21a14.87 14.87 0 000 5h5.33c.06.36.19.7.36 1H7.42c.15.59.34 1.13.56 1.6C8.59 16.4 9.34 17 10 17c.32 0 .66-.14 1-.44 0 .46.11.91.31 1.33zm.71-13C11.41 3.6 10.66 3 10 3c-.66 0-1.4.59-2.02 1.9-.22.47-.4 1.01-.56 1.6h5.16a9.25 9.25 0 00-.56-1.6zM6.4 6.5c.17-.74.4-1.42.68-2.01.19-.4.4-.78.64-1.1A7.02 7.02 0 003.94 6.5h2.45zM6 10c0-.87.07-1.71.2-2.5H3.45a6.98 6.98 0 000 5h2.73C6.07 11.71 6 10.87 6 10zm1.07 5.51c-.27-.59-.5-1.27-.68-2.01H3.94a7.02 7.02 0 003.77 3.12c-.24-.33-.45-.7-.64-1.1zm9-9.01a7.02 7.02 0 00-3.78-3.12c.24.33.45.7.64 1.1.27.6.5 1.28.68 2.02h2.45zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default GlobePersonIcon
