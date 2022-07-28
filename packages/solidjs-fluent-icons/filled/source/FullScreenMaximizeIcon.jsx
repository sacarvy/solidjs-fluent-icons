import { splitProps } from "solid-js"
function FullScreenMaximizeIcon(props) {
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
			<path d="M3 5.25C3 4.01 4 3 5.25 3h1.87a.75.75 0 110 1.5H5.25a.75.75 0 00-.75.75v1.87a.75.75 0 11-1.5 0V5.25zm9.13-1.5c0-.41.34-.75.75-.75h1.87C15.99 3 17 4 17 5.25v1.87a.75.75 0 01-1.5 0V5.25a.75.75 0 00-.75-.75h-1.87a.75.75 0 01-.75-.75zm-8.38 8.38c.41 0 .75.34.75.75v1.87c0 .41.34.75.75.75h1.87a.75.75 0 010 1.5H5.25C4.01 17 3 16 3 14.75v-1.87c0-.41.34-.75.75-.75zm12.5 0c.41 0 .75.34.75.75v1.87c0 1.24-1 2.25-2.25 2.25h-1.87a.75.75 0 010-1.5h1.87c.41 0 .75-.34.75-.75v-1.87c0-.41.34-.75.75-.75z" />
		</svg>
	)
}
export default FullScreenMaximizeIcon
