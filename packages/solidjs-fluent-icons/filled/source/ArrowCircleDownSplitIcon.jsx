import { splitProps } from "solid-js"
function ArrowCircleDownSplitIcon(props) {
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
			<path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-9.2 2.41a.5.5 0 10-.71-.7l-.59.58V9h5v3.3l-.59-.6a.5.5 0 00-.7.71l1.44 1.44c.2.2.5.2.7 0l1.44-1.44a.5.5 0 00-.7-.7l-.59.58V8.5A.5.5 0 0013 8h-2.5V5.5a.5.5 0 00-1 0V8H7a.5.5 0 00-.5.5v3.8l-.59-.6a.5.5 0 00-.7.71l1.44 1.44c.2.2.5.2.7 0l1.44-1.44z" />
		</svg>
	)
}
export default ArrowCircleDownSplitIcon
