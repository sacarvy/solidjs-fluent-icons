import { splitProps } from "solid-js"
function DocumentArrowUpIcon(props) {
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
			<path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 004 9.2V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM5.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 11-.7.7L6 13.71v2.79a.5.5 0 01-1 0v-2.8l-1.15 1.15a.5.5 0 11-.7-.7l2-2A.5.5 0 015.5 12a.5.5 0 01.35.14l2 2z" />
		</svg>
	)
}
export default DocumentArrowUpIcon
