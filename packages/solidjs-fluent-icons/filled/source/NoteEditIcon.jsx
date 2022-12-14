import { splitProps } from "solid-js"
function NoteEditIcon(props) {
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
			<path d="M3 14.18A3 3 0 006 17h2l.06-.35.37-1.5a3.2 3.2 0 01.84-1.48l4.83-4.83a2.87 2.87 0 012.9-.7V5.81A3 3 0 0014 3h-4v4.18a3 3 0 01-2.82 2.81L7 10H3v4.18zm.46-5.83A2 2 0 003.1 9h4.06a2 2 0 001.83-1.85L9 7V3.1a2 2 0 00-.8.49L3.6 8.2l-.13.14zm6.52 6.03l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default NoteEditIcon
