import { splitProps } from "solid-js"
function TagQuestionMarkIcon(props) {
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
			<path d="M14 7a1 1 0 100-2 1 1 0 000 2zm-2.87-5a2 2 0 00-1.43.58L3.02 9.25a2 2 0 000 2.83l4.95 4.95a2 2 0 001.95.51c-.2-.29-.36-.6-.5-.93a1 1 0 01-.74-.29l-4.95-4.95a1 1 0 010-1.41l6.68-6.67a1 1 0 01.71-.29l4.9.03a1 1 0 01.99 1v4.95a1 1 0 01-.16.55c.3.14.6.31.86.5a2 2 0 00.3-1.05V4.03a2 2 0 00-1.99-2L11.12 2zM19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-4.5 1.88a.62.62 0 110 1.25.62.62 0 010-1.25zm0-4.88c1.03 0 1.85.85 1.85 1.95 0 .59-.21.91-.72 1.32l-.28.22c-.25.19-.33.3-.35.44v.16a.5.5 0 01-1-.09c0-.57.21-.88.72-1.29l.27-.21c.3-.23.36-.35.36-.55 0-.55-.38-.95-.85-.95-.5 0-.86.37-.85.95a.5.5 0 11-1 0c-.01-1.13.8-1.95 1.85-1.95z" />
		</svg>
	)
}
export default TagQuestionMarkIcon
