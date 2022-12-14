import { splitProps, ComponentProps, JSX } from "solid-js"

function BroomIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.91 2.18c.2.2.2.51 0 .7l-5.32 5.33a4.5 4.5 0 01-.34 6l-.66.66-2.09 3.48a.5.5 0 01-.78.1l-7.07-7.08a.5.5 0 01.1-.78L5.22 8.5l.66-.66a4.5 4.5 0 015.99-.34l5.32-5.32c.2-.2.51-.2.71 0zM6.24 8.9l4.95 4.95.36-.35A3.5 3.5 0 106.6 8.55l-.36.35zm-.78.63L2.8 11.12l6.16 6.17 1.6-2.66-5.11-5.1z" />
		</svg>
	)
}
export default BroomIcon
