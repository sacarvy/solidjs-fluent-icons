import { splitProps } from "solid-js"
function VehicleBusIcon(props) {
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
			<path d="M9 4a.5.5 0 000 1h2a.5.5 0 000-1H9zm-1 9a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2zM3 5.5A3.5 3.5 0 016.5 2h7A3.5 3.5 0 0117 5.5V8h1a.5.5 0 010 1h-1v7.5c0 .83-.67 1.5-1.5 1.5h-1a1.5 1.5 0 01-1.5-1.5V16H7v.5c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 013 16.5V9H2a.5.5 0 010-1h1V5.5zm13 0A2.5 2.5 0 0013.5 3h-7A2.5 2.5 0 004 5.5V10h12V5.5zM14 16v.5c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V16h-2zM4 16v.5c0 .28.22.5.5.5h1a.5.5 0 00.5-.5V16H4zm0-1h12v-4H4v4z" />
		</svg>
	)
}
export default VehicleBusIcon
