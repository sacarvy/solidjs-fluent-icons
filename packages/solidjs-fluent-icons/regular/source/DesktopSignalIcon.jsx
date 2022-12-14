import { splitProps } from "solid-js"
function DesktopSignalIcon(props) {
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
			<path d="M12 1c-.18 0-.36 0-.54.02a.5.5 0 10.08 1L12 2a6 6 0 015.98 6.46.5.5 0 101 .08L19 8a7 7 0 00-7-7zm0 2c-.19 0-.37.01-.55.03a.5.5 0 00.1 1L12 4a4 4 0 013.98 4.45.5.5 0 10.99.1A5 5 0 0012 3zm0 2c-.2 0-.4.02-.6.06a.5.5 0 00.2.98A2.01 2.01 0 0114 8c0 .14-.01.27-.04.4a.5.5 0 00.98.2A3.01 3.01 0 0012 5zm-1.92-3H4a2 2 0 00-2 2v9c0 1.1.9 2 2 2h3v2H5.5a.5.5 0 100 1h9a.5.5 0 000-1H13v-2h3a2 2 0 002-2V9.92a1.5 1.5 0 01-.52-.3c-.14.12-.3.22-.48.28V13a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h6.1c.06-.18.16-.34.29-.48a1.5 1.5 0 01-.31-.52zM12 15v2H8v-2h4zm1-7a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default DesktopSignalIcon
