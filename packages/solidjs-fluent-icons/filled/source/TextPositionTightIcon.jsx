import { splitProps } from "solid-js"
function TextPositionTightIcon(props) {
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
			<path d="M3.5 2.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zm0 12a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zm6.5-8.5c-1.24 0-2.25 1-2.25 2.25v5a.75.75 0 01-1.5 0v-5a3.75 3.75 0 117.5 0v5a.75.75 0 01-1.5 0v-5c0-1.24-1-2.25-2.25-2.25zm-6.5 5.5h1.75v1.5H3.5a.75.75 0 010-1.5zm13 1.5h-1.75v-1.5h1.75a.75.75 0 010 1.5zm-1.75-4.5v1.5h1.75a.75.75 0 000-1.5h-1.75zm-8.62-3c-.32.45-.57.95-.71 1.5H3.5a.75.75 0 010-1.5h2.63zm10.37 1.5h-1.92a4.73 4.73 0 00-.7-1.5h2.62a.75.75 0 010 1.5zM5.25 8.75v1.5H3.5a.75.75 0 010-1.5h1.75z" />
		</svg>
	)
}
export default TextPositionTightIcon
