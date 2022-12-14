import { splitProps } from "solid-js"
function PreviewLinkIcon(props) {
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
			<path d="M5 6v2h10V6H5zm7 5v3h3v-3h-3zM2 5.75A2.75 2.75 0 014.75 3h10.5A2.75 2.75 0 0118 5.75v8.5A2.75 2.75 0 0115.25 17H4.75A2.75 2.75 0 012 14.25v-8.5zm2-.25v3c0 .27.22.5.5.5h11a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5zm7 5v4c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-4a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5zm-6.5 0a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 14c0 .28.22.5.5.5h5a.5.5 0 000-1h-5a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default PreviewLinkIcon
