import { splitProps } from "solid-js"
function CommentMultipleLinkIcon(props) {
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
			<path d="M6.5 2a2.5 2.5 0 00-2.46 2.04A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16H5v1.03a1 1 0 001.58.81L9.16 16h.18a3.48 3.48 0 01-.3-1h-.2L6 17.03V15H4.5A1.5 1.5 0 013 13.5v-7C3 5.67 3.67 5 4.5 5h9c.83 0 1.5.67 1.5 1.5V11h1V6.5A2.5 2.5 0 0013.5 4H5.09c.2-.58.76-1 1.41-1h8A2.5 2.5 0 0117 5.5v5c0 .18-.03.36-.1.52.35.04.67.13.98.26.08-.24.12-.5.12-.78v-5A3.5 3.5 0 0014.5 2h-8zm6 10a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default CommentMultipleLinkIcon
