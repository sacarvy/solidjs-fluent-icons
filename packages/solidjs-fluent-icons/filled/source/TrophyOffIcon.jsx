import { splitProps } from "solid-js"
function TrophyOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.59 4.3c-.36.28-.6.71-.6 1.2V7a3 3 0 002.62 2.97 4.5 4.5 0 003.9 3.5v1.5h-2a2 2 0 00-2 2v.5c0 .27.22.5.5.5h8a.5.5 0 00.5-.5v-.5a2 2 0 00-2-2h-2v-1.5c.6-.07 1.19-.26 1.7-.55l4.94 4.93a.5.5 0 00.7-.7l-15-15zM5.5 6.2v2.72A2 2 0 014 7V5.5c0-.22.13-.4.32-.47L5.5 6.21zm8.9 3.76a4.48 4.48 0 01-.7 1.6L5.57 3.46A2 2 0 017.5 2h5a2 2 0 012 2h1c.82 0 1.5.67 1.5 1.5V7a3 3 0 01-2.6 2.97zm.1-1.03A2 2 0 0016 7V5.5a.5.5 0 00-.5-.5h-1v3.94z" />
		</svg>
	)
}
export default TrophyOffIcon
