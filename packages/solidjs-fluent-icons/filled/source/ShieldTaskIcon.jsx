import { splitProps } from "solid-js"
function ShieldTaskIcon(props) {
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
			<path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0C14.69 16.23 17 13.39 17 9.5V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42zm3.57 5.77l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7l1.65 1.64 3.65-3.64a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default ShieldTaskIcon
