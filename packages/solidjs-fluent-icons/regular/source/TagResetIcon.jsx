import { splitProps } from "solid-js"
function TagResetIcon(props) {
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
			<path d="M15 6a1 1 0 11-2 0 1 1 0 012 0zM9.7 2.58A2 2 0 0111.13 2l4.89.03a2 2 0 011.99 2v4.95a2 2 0 01-.58 1.42l-.15.15a5 5 0 00-1.03-.4l.47-.46a1 1 0 00.3-.7L17 4.02a1 1 0 00-1-1L11.12 3a1 1 0 00-.71.3L3.73 9.95a1 1 0 000 1.41l4.95 4.95a1 1 0 001.41 0l.07-.07a5 5 0 00.37 1 2 2 0 01-2.56-.22l-4.95-4.95a2 2 0 010-2.83L9.7 2.58zm3.15 7.27a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L11.71 12H15a3 3 0 11-3 3 .5.5 0 10-1 0 4 4 0 104-4h-3.3l1.15-1.15z" />
		</svg>
	)
}
export default TagResetIcon
