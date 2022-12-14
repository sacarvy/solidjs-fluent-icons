import { splitProps } from "solid-js"
function RibbonOffIcon(props) {
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
			<path d="M4.62 5.33L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L14 14.71v2.79a.5.5 0 01-.75.43L10 16.08l-3.25 1.85A.5.5 0 016 17.5v-5.03a5.98 5.98 0 01-1.38-7.14zm8.05 8.05A5.98 5.98 0 017 13.2v3.44l2.75-1.57a.5.5 0 01.5 0L13 16.64V13.7l-.33-.33zm-.76-.76L5.38 6.1A4.98 4.98 0 0010 13c.68 0 1.32-.13 1.91-.38zM15 8c0 1.35-.53 2.57-1.4 3.47l.7.71A6 6 0 005.82 3.7l.7.7A4.98 4.98 0 0115 8z" />
		</svg>
	)
}
export default RibbonOffIcon
