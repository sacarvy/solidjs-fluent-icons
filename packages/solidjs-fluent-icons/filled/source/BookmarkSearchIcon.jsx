import { splitProps } from "solid-js"
function BookmarkSearchIcon(props) {
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
			<path d="M15.6 7.3a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L15.6 7.3zm.4-2.8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0zm0 4.62v8.38a.5.5 0 01-.8.4L10 14.12 4.8 17.9a.5.5 0 01-.8-.4v-13A2.5 2.5 0 016.5 2h3.26a4.5 4.5 0 005.68 6.56l.56.56z" />
		</svg>
	)
}
export default BookmarkSearchIcon
