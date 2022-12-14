import { splitProps } from "solid-js"
function ColumnArrowRightIcon(props) {
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
			<path d="M4 3h1a1 1 0 011 1v4h1V4a2 2 0 00-2-2H4a2 2 0 00-2 2v11c0 1.1.9 2 2 2h1a2 2 0 002-2v-4H6v4a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm11-1a2 2 0 00-2 2v11c0 1.1.9 2 2 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1zm1 1a1 1 0 011 1v11a1 1 0 01-1 1h-1a1 1 0 01-1-1V4a1 1 0 011-1h1zM9.15 7.15c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L10.29 10H5.5a.5.5 0 010-1h4.8L9.14 7.85a.5.5 0 010-.7z" />
		</svg>
	)
}
export default ColumnArrowRightIcon
