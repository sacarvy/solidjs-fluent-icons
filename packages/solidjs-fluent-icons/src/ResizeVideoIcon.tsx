import { splitProps, ComponentProps, JSX } from "solid-js"

function ResizeVideoIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 2a3 3 0 00-3 3v3.5a.5.5 0 001 0V5c0-1.1.9-2 2-2h3.5a.5.5 0 000-1H5zm6.5 0a.5.5 0 000 1H15a2 2 0 012 2v3.5a.5.5 0 001 0V5a3 3 0 00-3-3h-3.5zm6.5 9.5a.5.5 0 00-1 0V15a2 2 0 01-2 2h-3.5a.5.5 0 000 1H15a3 3 0 003-3v-3.5zM3.5 10A2.5 2.5 0 001 12.5v4A2.5 2.5 0 003.5 19h4a2.5 2.5 0 002.5-2.5v-4A2.5 2.5 0 007.5 10h-4zm.72 2.55l3 1.5a.5.5 0 010 .9l-3 1.5A.5.5 0 013.5 16v-3a.5.5 0 01.72-.45z" />
		</svg>
	)
}
export default ResizeVideoIcon
