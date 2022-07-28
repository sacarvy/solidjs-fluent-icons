import { splitProps } from "solid-js"
function Video360Icon(props) {
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
			<path d="M3.97 4.02A1.7 1.7 0 002 5.7v8.6a1.7 1.7 0 001.97 1.68 37.94 37.94 0 0112.25.02A1.7 1.7 0 0018 14.3V5.7a1.7 1.7 0 00-1.97-1.68c-4 .64-8.07.64-12.06 0zM16 14.96c-1-.15-2-.27-3-.35V12h2a1 1 0 011 1v1.96zm-4-.41a38.84 38.84 0 00-4 0V12a1 1 0 011-1h2a1 1 0 011 1v2.55zm-5 .06c-1 .08-2 .2-3 .35V13a1 1 0 011-1h2v2.61zM10 10a1 1 0 110-2 1 1 0 010 2zm-3.5 0a1 1 0 11-2 0 1 1 0 012 0zm9 0a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default Video360Icon
