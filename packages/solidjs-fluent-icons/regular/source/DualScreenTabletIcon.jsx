import { splitProps } from "solid-js"
function DualScreenTabletIcon(props) {
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
			<path d="M4 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6a2 2 0 01-2 2h-3v-1h3a1 1 0 001-1V5a1 1 0 00-1-1H6a1 1 0 00-1 1v1H4V5zm9 6h.5a.5.5 0 000-1H13v1zM2 9c0-1.1.9-2 2-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h2.5V8H4zm6 8a1 1 0 001-1V9a1 1 0 00-1-1H7.5v8H10zm-1-2a.5.5 0 000 1h.5a.5.5 0 000-1H9zm-5 .5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DualScreenTabletIcon
