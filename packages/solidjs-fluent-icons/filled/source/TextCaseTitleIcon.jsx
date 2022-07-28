import { splitProps } from "solid-js"
function TextCaseTitleIcon(props) {
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
			<path d="M12.5 3.25c.41 0 .75.34.75.75v4.66c.5-.42 1.1-.66 1.75-.66 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 01-1.5 0V4c0-.41.34-.75.75-.75zM15 13.5c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2zM6.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 11-1.41.5l-.78-2.25H4.06l-.86 2.27a.75.75 0 01-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48zM4.62 11h3.5L6.45 6.2 4.63 11z" />
		</svg>
	)
}
export default TextCaseTitleIcon
