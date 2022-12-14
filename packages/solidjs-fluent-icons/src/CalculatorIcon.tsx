import { splitProps, ComponentProps, JSX } from "solid-js"

function CalculatorIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8 11a1 1 0 11-2 0 1 1 0 012 0zm0 3a1 1 0 11-2 0 1 1 0 012 0zm5-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm-4-2a1 1 0 100-2 1 1 0 000 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zM7.5 4C6.67 4 6 4.67 6 5.5v1C6 7.33 6.67 8 7.5 8h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-5zM7 5.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1zm9 10a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 15.5v-11A2.5 2.5 0 016.5 2h7A2.5 2.5 0 0116 4.5v11zm-1-11c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-11z" />
		</svg>
	)
}
export default CalculatorIcon
