import { splitProps, ComponentProps, JSX } from "solid-js"

function PauseOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 3.7l-.85-.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-.45-.45c-.28.37-.71.6-1.2.6h-2a1.5 1.5 0 01-1.5-1.5v-3.8l-4-4v7.8c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 013 16.5V3.7zm4 4l-3-3v11.8c0 .28.22.5.5.5h2a.5.5 0 00.5-.5V7.7zm6 6v2.8c0 .28.22.5.5.5h2a.5.5 0 00.47-.32L13 13.7zM7 3.5v1.38l1 1V3.5C8 2.67 7.33 2 6.5 2h-2c-.12 0-.23.01-.34.04l.96.96H6.5c.28 0 .5.22.5.5zm5 6.38l1 1V3.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v10.38l1 1V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v6.38z" />
		</svg>
	)
}
export default PauseOffIcon
