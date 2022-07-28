import { splitProps } from "solid-js"
function ArrowsBidirectionalIcon(props) {
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
			<path d="M6.68 5.03c.2.08.32.26.32.47V8h6V5.5a.5.5 0 01.87-.33l4 4.5a.5.5 0 010 .66l-4 4.5a.5.5 0 01-.87-.33V12H7v2.5a.5.5 0 01-.87.33l-4-4.5a.5.5 0 010-.66l4-4.5a.5.5 0 01.55-.14zM3.17 10L6 13.18V11.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v1.68L16.83 10 14 6.82V8.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5V6.82L3.17 10z" />
		</svg>
	)
}
export default ArrowsBidirectionalIcon
