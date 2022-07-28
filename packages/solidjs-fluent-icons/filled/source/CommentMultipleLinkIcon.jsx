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
			<path d="M6.5 2a2.5 2.5 0 00-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0116 7.5V11h.5c.49 0 .95.1 1.38.28.08-.24.12-.5.12-.78V6a4 4 0 00-4-4H6.5zM15 7.5V11h-2.5a3.5 3.5 0 00-3.16 5h-.18l-2.58 1.84A1 1 0 015 17.03V16h-.5A2.5 2.5 0 012 13.5v-6A2.5 2.5 0 014.5 5h8A2.5 2.5 0 0115 7.5zM12.5 12a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default CommentMultipleLinkIcon
