import { splitProps } from "solid-js"
function ArrowSyncCircleIcon(props) {
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
			<path d="M10 18a8 8 0 110-16 8 8 0 010 16zm3.5-8a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.7a3.5 3.5 0 00-5.6-.53.5.5 0 10.74.66 2.5 2.5 0 014.15.67h-.79a.5.5 0 100 1h2zm-7.5.5v2a.5.5 0 001 0v-.7a3.5 3.5 0 005.6.53.5.5 0 00-.74-.66A2.5 2.5 0 017.71 11h.79a.5.5 0 000-1h-2a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default ArrowSyncCircleIcon
