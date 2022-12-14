import { splitProps } from "solid-js"
function TagLockAccentIcon(props) {
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
			<path d="M17.5 4.03c0-.82-.66-1.49-1.48-1.5l-4.9-.03c-.4 0-.78.16-1.06.44L3.38 9.61a1.5 1.5 0 000 2.12l4.94 4.95a1.5 1.5 0 001.68.3V14a2 2 0 011.5-1.94V12a3 3 0 015.4-1.79l.17-.16c.29-.29.44-.67.44-1.07V4.03z" />
		</svg>
	)
}
export default TagLockAccentIcon
