import { splitProps } from "solid-js"
function DocumentWidthIcon(props) {
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
			<path d="M6 2h8a2 2 0 012 2v2.34A1.5 1.5 0 0015.02 8h-.52a1.5 1.5 0 000 3h.52a1.5 1.5 0 00.98 1.66V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.34A1.5 1.5 0 004.98 11h.52a1.5 1.5 0 000-3h-.52A1.5 1.5 0 004 6.34V4c0-1.1.9-2 2-2zM3.88 7.42a.5.5 0 01-.05.7l-1 .88H5.5a.5.5 0 110 1H2.83l1 .87a.5.5 0 01-.66.76l-2-1.75a.5.5 0 010-.76l2-1.75a.5.5 0 01.7.05zM17.17 10l-1 .87a.5.5 0 00.66.76l2-1.75a.5.5 0 000-.76l-2-1.75a.5.5 0 00-.66.76l1 .87H14.5a.5.5 0 000 1h2.67z" />
		</svg>
	)
}
export default DocumentWidthIcon
