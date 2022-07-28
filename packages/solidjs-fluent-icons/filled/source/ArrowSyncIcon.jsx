import { splitProps } from "solid-js"
function ArrowSyncIcon(props) {
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
			<path d="M9.89 3.75a6.25 6.25 0 00-3.63 11.26.75.75 0 01-.9 1.2 7.75 7.75 0 014-13.93l-.6-.59A.75.75 0 019.82.63l2.12 2.12c.3.3.3.77 0 1.06L9.82 5.93a.75.75 0 01-1.06-1.06L9.9 3.75zm.22 12.5a6.25 6.25 0 003.63-11.26.75.75 0 01.9-1.2 7.75 7.75 0 01-4 13.93l.6.59a.75.75 0 11-1.06 1.06l-2.12-2.12a.75.75 0 010-1.06l2.12-2.13a.75.75 0 111.06 1.07l-1.13 1.12z" />
		</svg>
	)
}
export default ArrowSyncIcon
