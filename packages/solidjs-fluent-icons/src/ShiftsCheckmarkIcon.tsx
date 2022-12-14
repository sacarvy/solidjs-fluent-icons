import { splitProps, ComponentProps, JSX } from "solid-js"

function ShiftsCheckmarkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 3a3 3 0 00-3 3v3.6c.32-.16.65-.3 1-.4V6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-3.2c-.1.35-.24.68-.4 1H14a3 3 0 003-3V6a3 3 0 00-3-3H6zm3 7.26c.27.22.52.47.74.74h2.76a.5.5 0 000-1H10V6.5a.5.5 0 00-1 0v3.76zm1 4.24a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 15.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default ShiftsCheckmarkIcon
