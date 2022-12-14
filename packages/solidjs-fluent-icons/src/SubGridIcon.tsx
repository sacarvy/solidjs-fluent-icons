import { splitProps, ComponentProps, JSX } from "solid-js"

function SubGridIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V6a3 3 0 00-3-3H6zM4 14v-3.5h2v2c0 .83.67 1.5 1.5 1.5h2v2H6a2 2 0 01-2-2zm6.5 0h2c.83 0 1.5-.67 1.5-1.5v-2h2V14a2 2 0 01-2 2h-3.5v-2zm2.5-3.5v2a.5.5 0 01-.5.5h-2v-2.5H13zm1-1v-2c0-.83-.67-1.5-1.5-1.5h-2V4H14a2 2 0 012 2v3.5h-2zM10.5 7h2c.28 0 .5.22.5.5v2h-2.5V7zm-1-1h-2C6.67 6 6 6.67 6 7.5v2H4V6c0-1.1.9-2 2-2h3.5v2zM7 9.5v-2c0-.28.22-.5.5-.5h2v2.5H7zm0 1h2.5V13h-2a.5.5 0 01-.5-.5v-2z" />
		</svg>
	)
}
export default SubGridIcon
