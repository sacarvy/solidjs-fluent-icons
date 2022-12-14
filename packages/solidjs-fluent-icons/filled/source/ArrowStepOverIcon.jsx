import { splitProps } from "solid-js"
function ArrowStepOverIcon(props) {
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
			<path d="M12.15 3.15a.5.5 0 000 .7L15.29 7H10a8 8 0 00-6.94 4.04.5.5 0 10.88.5A7 7 0 0110 8h5.3l-3.15 3.15a.5.5 0 10.7.7l3.99-3.98a.5.5 0 00.01-.72l-4-4a.5.5 0 00-.7 0zM8 15a2 2 0 104 0 2 2 0 00-4 0z" />
		</svg>
	)
}
export default ArrowStepOverIcon
