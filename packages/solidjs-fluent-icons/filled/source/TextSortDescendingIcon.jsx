import { splitProps } from "solid-js"
function TextSortDescendingIcon(props) {
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
			<path d="M4 2a.75.75 0 100 1.5h2.53L3.39 7.8A.75.75 0 004 9h4a.75.75 0 000-1.5H5.47l3.14-4.3A.75.75 0 008 2H4zm2.7 8.5a.75.75 0 00-1.4 0L3.03 17a.75.75 0 101.42.5l.34-1h2.4l.34 1a.75.75 0 101.42-.5L6.7 10.5zM6 13.04L6.68 15H5.32L6 13.04zM14.25 2c.41 0 .75.34.75.75v12.57l1.45-1.58a.75.75 0 011.1 1.02l-2.75 3a.75.75 0 01-1.1 0l-2.75-3a.75.75 0 011.1-1.02l1.45 1.58V2.75c0-.41.34-.75.75-.75z" />
		</svg>
	)
}
export default TextSortDescendingIcon
