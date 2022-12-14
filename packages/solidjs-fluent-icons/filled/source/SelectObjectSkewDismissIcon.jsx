import { splitProps } from "solid-js"
function SelectObjectSkewDismissIcon(props) {
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
			<path d="M15 4.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-13 11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm4-11a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm3.89.75h4.22a2.5 2.5 0 010-1.5H9.9a2.5 2.5 0 010 1.5zM3.6 13L5.98 6.5c.4.3.88.48 1.41.5l-2.37 6.52c-.4-.3-.88-.48-1.41-.5zm2.28 3.25h3.4a5.48 5.48 0 01-.28-1.5H5.89a2.5 2.5 0 010 1.5zM16.39 7l-.77 2.11a5.52 5.52 0 00-1.56-.1l.92-2.52c.4.3.88.48 1.41.5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" />
		</svg>
	)
}
export default SelectObjectSkewDismissIcon
