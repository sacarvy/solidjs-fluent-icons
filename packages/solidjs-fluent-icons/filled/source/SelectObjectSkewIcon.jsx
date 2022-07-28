import { splitProps } from "solid-js"
function SelectObjectSkewIcon(props) {
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
			<path d="M15 4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-4 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM3.5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM6 4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm8.11.75H9.9a2.5 2.5 0 000-1.5h4.22a2.5 2.5 0 000 1.5zM3.61 13L5.98 6.5c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5zm6.5 3.25H5.9a2.5 2.5 0 000-1.5h4.22a2.5 2.5 0 000 1.5zm2.5-3.25l2.37-6.51c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5z" />
		</svg>
	)
}
export default SelectObjectSkewIcon
