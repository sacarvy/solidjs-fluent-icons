import { splitProps } from "solid-js"
function PulseSquareIcon(props) {
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
			<path d="M8.97 6.33a.5.5 0 00-.94 0L6.65 10H5.5a.5.5 0 000 1H7c.2 0 .4-.13.47-.32l1.02-2.73 2.04 5.72a.5.5 0 00.92.05L12.8 11h1.69a.5.5 0 000-1h-2a.5.5 0 00-.45.28l-.97 1.95-2.1-5.9zM5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zM4 5a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
		</svg>
	)
}
export default PulseSquareIcon
