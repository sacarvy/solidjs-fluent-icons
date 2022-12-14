import { splitProps } from "solid-js"
function FolderBriefcaseIcon(props) {
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
			<path d="M8.07 3.3l1.32.99-1.96 2.05a.5.5 0 01-.36.16H2v-1A2.5 2.5 0 014.5 3h2.67c.32 0 .64.1.9.3zm.09 3.73l2.4-2.53h4.94A2.5 2.5 0 0118 6.84v4.33a3 3 0 00-1-.17v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1a3 3 0 00-3 3v3H4.5A2.5 2.5 0 012 14.5v-7h5.07c.41 0 .8-.17 1.09-.47zM11 12a2 2 0 00-2 2v3c0 1.1.9 2 2 2h6a2 2 0 002-2v-3a2 2 0 00-2-2h-1v-1.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V12h-1zm2 0v-1h2v1h-2z" />
		</svg>
	)
}
export default FolderBriefcaseIcon
