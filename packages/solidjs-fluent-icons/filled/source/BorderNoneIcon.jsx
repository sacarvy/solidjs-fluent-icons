import { splitProps } from "solid-js"
function BorderNoneIcon(props) {
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
			<path d="M8.75 3a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zm0 12.5a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5zM5.45 4.6a1.5 1.5 0 00-.88.94.75.75 0 01-1.38-.58 3 3 0 011.77-1.77.75.75 0 11.5 1.41zm9.95.85a1.5 1.5 0 00-.94-.88.75.75 0 01.58-1.38 3 3 0 011.78 1.77h-.01a.75.75 0 11-1.41.49zM3.75 12a.75.75 0 01-.75-.75v-2.5a.75.75 0 011.5 0v2.5c0 .41-.34.75-.75.75zm11.75-.75a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5zM5.45 15.4a1.5 1.5 0 01-.88-.94.75.75 0 00-1.38.58 3 3 0 001.77 1.77.75.75 0 10.5-1.41zm9.95-.85a1.5 1.5 0 01-.94.88.75.75 0 00.58 1.38 3 3 0 001.78-1.77h-.01a.75.75 0 10-1.41-.49z" />
		</svg>
	)
}
export default BorderNoneIcon
