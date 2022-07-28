import { splitProps } from "solid-js"
function BackpackAddIcon(props) {
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
			<path d="M7.5 4.5a2.5 2.5 0 015 0v.04a6 6 0 013.45 4.65 5.5 5.5 0 00-3.07.05c.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04a5.53 5.53 0 00-1.74 2H4v-2a6 6 0 013.5-5.46V4.5zm3.97-.32a1.5 1.5 0 00-2.94 0 6.01 6.01 0 012.94 0zM9 14.5c0-.52.07-1.02.2-1.5H8v1.5a.5.5 0 01-1 0V13H4v2a3 3 0 003 3h3.26A5.48 5.48 0 019 14.5zM8.7 8a.7.7 0 00-.7.7c0 .17.13.3.3.3h3.4a.3.3 0 00.3-.3.7.7 0 00-.7-.7H8.7zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default BackpackAddIcon
