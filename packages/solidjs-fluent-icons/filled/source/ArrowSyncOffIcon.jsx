import { splitProps } from "solid-js"
function ArrowSyncOffIcon(props) {
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
			<path d="M9.89 3.75a6.24 6.24 0 00-3.12.9L5.68 3.56a7.73 7.73 0 013.67-1.28l-.59-.59A.75.75 0 019.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 01-1.06-1.06L9.9 3.75zM4.18 4.88a7.75 7.75 0 001.18 11.33.75.75 0 10.9-1.2 6.25 6.25 0 01-1.02-9.06l8.81 8.8a6.23 6.23 0 01-3.94 1.5l1.13-1.12a.75.75 0 00-1.06-1.07L8.06 16.2c-.3.29-.3.76 0 1.06l2.12 2.12a.75.75 0 101.06-1.06l-.59-.59a7.72 7.72 0 004.47-1.9l2.03 2.03a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7l2.03 2.03zm11.17 8.35l1.09 1.09a7.75 7.75 0 00-1.8-10.53.75.75 0 00-.9 1.2 6.25 6.25 0 011.6 8.24z" />
		</svg>
	)
}
export default ArrowSyncOffIcon
