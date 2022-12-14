import { splitProps, ComponentProps, JSX } from "solid-js"

function CalculatorMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 4a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V5a1 1 0 00-1-1H6zm0 1h6v2H6V5zm2 5a1 1 0 112 0 1 1 0 01-2 0zm1 1.75a1 1 0 100 2 1 1 0 000-2zM11 10a1 1 0 112 0 1 1 0 01-2 0zm1 1.75a1 1 0 100 2 1 1 0 000-2zM5 10a1 1 0 112 0 1 1 0 01-2 0zm1 1.75a1 1 0 100 2 1 1 0 000-2zM5.5 2A2.5 2.5 0 003 4.5v9A2.5 2.5 0 005.5 16h7a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0012.5 2h-7zM4 4.5C4 3.67 4.67 3 5.5 3h7c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 014 13.5v-9zM7.5 18a2.5 2.5 0 01-2-1h7a3.5 3.5 0 003.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 01-4.5 4.5h-5z" />
		</svg>
	)
}
export default CalculatorMultipleIcon
