import { splitProps } from "solid-js"
function ReadAloudIcon(props) {
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
			<path d="M11.84 2.14c.2-.36.66-.5 1.02-.3a9.94 9.94 0 015.39 8.08.75.75 0 11-1.5.16 8.45 8.45 0 00-4.6-6.92.75.75 0 01-.3-1.02zM8.7 4.22a.75.75 0 00-1.38 0l-4.5 11a.75.75 0 001.38.56l1.45-3.53h4.72l1.45 3.53a.75.75 0 001.38-.56l-4.5-11zm1.06 6.53h-3.5L8 6.48l1.75 4.27zm2.62-6.4a.75.75 0 00-.74 1.3c1.52.87 2.4 2.4 2.63 3.96a.75.75 0 101.48-.22 6.92 6.92 0 00-3.37-5.04z" />
		</svg>
	)
}
export default ReadAloudIcon
