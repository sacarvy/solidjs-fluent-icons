import { splitProps, ComponentProps, JSX } from "solid-js"

function ArchiveMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 8a.5.5 0 000 1h3a.5.5 0 000-1h-3zm-4-6C2.67 2 2 2.67 2 3.5v2c0 .66.42 1.21 1 1.42A.5.5 0 003 7v5.5A3.5 3.5 0 006.5 16h5a3.5 3.5 0 003.5-3.5V7a.5.5 0 000-.08c.58-.2 1-.76 1-1.42v-2c0-.83-.67-1.5-1.5-1.5h-11zM4 12.5V7h10v5.5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 014 12.5zm-1-9c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-2zM8.5 18c-.95 0-1.82-.38-2.45-1h6.45a3.5 3.5 0 003.5-3.5V7.09c.58.2 1 .76 1 1.41v5a4.5 4.5 0 01-4.5 4.5h-4z" />
		</svg>
	)
}
export default ArchiveMultipleIcon
