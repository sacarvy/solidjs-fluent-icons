import { splitProps, ComponentProps, JSX } from "solid-js"

function AlignSpaceEvenlyVerticalIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M4 3c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6z" />
			<path d="M4 15c0-1.1.9-2 2-2h8a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1zm2-1a1 1 0 00-1 1v1a1 1 0 001 1h8a1 1 0 001-1v-1a1 1 0 00-1-1H6z" />
			<path d="M6 7a2 2 0 00-2 2v1c0 1.1.9 2 2 2h8a2 2 0 002-2V9a2 2 0 00-2-2H6zM5 9a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1H6a1 1 0 01-1-1V9z" />
		</svg>
	)
}
export default AlignSpaceEvenlyVerticalIcon
