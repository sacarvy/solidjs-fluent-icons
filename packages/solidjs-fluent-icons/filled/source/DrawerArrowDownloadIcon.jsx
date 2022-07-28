import { splitProps } from "solid-js"
function DrawerArrowDownloadIcon(props) {
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
			<path d="M9 5.5a4.5 4.5 0 014-4.47v3.76l-.65-.64a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 00-.7-.7l-.65.64V1.03A4.5 4.5 0 119 5.5zm2 2c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM6 4h2.2c-.08.32-.15.66-.18 1H6a2 2 0 00-2 2h4.2c.1.35.24.68.4 1H4v3h3.5c.28 0 .5.22.5.5a2 2 0 104 0c0-.28.22-.5.5-.5H16v-.6c.36-.18.7-.4 1-.66V15a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3z" />
		</svg>
	)
}
export default DrawerArrowDownloadIcon
