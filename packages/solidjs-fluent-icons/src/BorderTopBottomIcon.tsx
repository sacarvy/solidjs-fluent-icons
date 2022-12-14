import { splitProps, ComponentProps, JSX } from "solid-js"

function BorderTopBottomIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.07 5.34a.5.5 0 00.38.66.5.5 0 00.6-.46A2 2 0 016 4h8a2 2 0 011.95 1.6.5.5 0 00.6.4.5.5 0 00.38-.66A3 3 0 0014 3H6a3 3 0 00-2.93 2.34zm0 9.32a.5.5 0 01.38-.66.5.5 0 01.6.46A2 2 0 006 16h8a2 2 0 001.95-1.6.5.5 0 01.6-.4.5.5 0 01.38.66A3 3 0 0114 17H6a3 3 0 01-2.93-2.34zM16.5 12a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v3a.5.5 0 01-.5.5zM3 11.5a.5.5 0 001 0v-3a.5.5 0 00-1 0v3z" />
		</svg>
	)
}
export default BorderTopBottomIcon
