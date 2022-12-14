import { splitProps } from "solid-js"
function DoubleSwipeDownIcon(props) {
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
			<path d="M6.28 17.78c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06L5 15.44V5.75a.75.75 0 011.5 0v9.69l1.22-1.22a.75.75 0 011.06 1.06l-2.5 2.5zM2 5.75c0 1.44.81 2.69 2 3.32v-1.9a2.25 2.25 0 113.5 0v1.9A3.75 3.75 0 102 5.75zm10.5 3.32a3.75 3.75 0 113.5 0v-1.9a2.25 2.25 0 10-3.5 0v1.9zm2.28 8.71c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06l1.22 1.22V5.75a.75.75 0 011.5 0v9.69l1.22-1.22a.75.75 0 111.06 1.06l-2.5 2.5z" />
		</svg>
	)
}
export default DoubleSwipeDownIcon
