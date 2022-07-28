import { splitProps } from "solid-js"
function ArrowAutofitHeightIcon(props) {
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
			<path d="M15 4.5l.71.73A.75.75 0 0016.8 4.2l-1.82-1.88a1 1 0 00-1.44 0l-1.82 1.88a.75.75 0 001.08 1.04l.71-.74v2.76a.75.75 0 001.5 0V4.5zM3 5c0-1.1.9-2 2-2h4.25a.75.75 0 010 1.5H5a.5.5 0 00-.5.5v10c0 .28.22.5.5.5h4.25a.75.75 0 010 1.5H5a2 2 0 01-2-2V5zm12.71 9.77l-.7.73v-2.75a.75.75 0 10-1.5 0v2.76l-.72-.74a.75.75 0 00-1.08 1.04l1.82 1.88a1 1 0 001.44 0l1.82-1.88a.75.75 0 00-1.08-1.04z" />
		</svg>
	)
}
export default ArrowAutofitHeightIcon
