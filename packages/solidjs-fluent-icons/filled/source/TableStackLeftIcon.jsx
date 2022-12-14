import { splitProps } from "solid-js"
function TableStackLeftIcon(props) {
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
			<path d="M3 16.5a.5.5 0 001 0v-13a.5.5 0 00-1 0v13zM17 5v2h-4V3h2a2 2 0 012 2zm-5-2v4H8V3.5c0-.28.22-.5.5-.5H12zm0 5H8v4h4V8zm5 4V8h-4v4h4zm-9 1h4v4H8.5a.5.5 0 01-.5-.5V13zm9 0v2a2 2 0 01-2 2h-2v-4h4z" />
		</svg>
	)
}
export default TableStackLeftIcon
