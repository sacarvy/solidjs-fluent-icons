import { splitProps } from "solid-js"
function BoardHeartIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h4.92l-.88-.89a3.53 3.53 0 01-.1-.11H6a2 2 0 01-2-2V8.06L9.5 8v3.75a3.59 3.59 0 011-1.09V4H14a2 2 0 012 2v4.03c.33-.04.67-.04 1 .01V6a3 3 0 00-3-3H6zM4 6c0-1.1.9-2 2-2h3.5v3L4 7.06V6zm13 5.06a2.6 2.6 0 011.25 4.35l-3.43 3.46a.45.45 0 01-.64 0l-3.43-3.46a2.6 2.6 0 01-.21-3.41 2.55 2.55 0 013.84-.24l.12.12.12-.12a2.55 2.55 0 012.38-.7z" />
		</svg>
	)
}
export default BoardHeartIcon
