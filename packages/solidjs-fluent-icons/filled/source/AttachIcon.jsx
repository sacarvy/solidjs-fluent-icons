import { splitProps } from "solid-js"
function AttachIcon(props) {
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
			<path d="M5.28 10.6l5.3-5.3a2.75 2.75 0 113.9 3.9L8.1 15.55a1.25 1.25 0 11-1.77-1.77L12 8.13a.75.75 0 00-1.06-1.06l-5.66 5.66a2.75 2.75 0 003.89 3.89l6.36-6.36a4.25 4.25 0 00-6-6.02l-5.31 5.3a.75.75 0 001.06 1.07z" />
		</svg>
	)
}
export default AttachIcon
