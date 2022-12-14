import { splitProps } from "solid-js"
function BookmarkOffIcon(props) {
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
			<path d="M4 4.7L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L16 16.71v.79a.5.5 0 01-.8.4L10 14.12 4.8 17.9a.5.5 0 01-.8-.4V4.7zm11 11L5 5.7v10.82l4.7-3.42a.5.5 0 01.6 0l4.7 3.42v-.81zm0-11.2v8.38l1 1V4.5A2.5 2.5 0 0013.5 2h-7a2.5 2.5 0 00-1.7.67l.7.71a1.5 1.5 0 011-.38h7c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default BookmarkOffIcon
