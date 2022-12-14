import { splitProps } from "solid-js"
function StarLineHorizontal3Icon(props) {
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
			<path d="M10.9 2.9a1 1 0 00-1.8 0L7.17 6.8l-4.31.63a1 1 0 00-.56 1.7l3.12 3.05-.73 4.3a1 1 0 001.45 1.05L11 14.98V13.5c0-.83.67-1.5 1.5-1.5a1.5 1.5 0 110-3 1.5 1.5 0 01-.07-3L10.9 2.9zm1.6 7.1a.5.5 0 000 1h5a.5.5 0 100-1h-5zM12 7.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 5.5a.5.5 0 000 1h5a.5.5 0 100-1h-5z" />
		</svg>
	)
}
export default StarLineHorizontal3Icon
