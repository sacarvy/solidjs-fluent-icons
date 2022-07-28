import { splitProps } from "solid-js"
function BezierCurveSquareIcon(props) {
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
			<path d="M5 3a2 2 0 00-2 2v8c1.4 0 2.26-.4 2.86-.96.62-.57.99-1.35 1.3-2.2l.28-.87.13-.41c.14-.41.29-.83.47-1.19s.41-.7.74-.96C9.1 6.14 9.52 6 10 6s.89.14 1.22.4c.33.26.56.6.74.97.18.36.33.78.47 1.19l.13.4c.09.3.18.58.29.87.3.86.67 1.64 1.29 2.21.6.56 1.47.96 2.86.96V5a2 2 0 00-2-2H5zm12 11c-1.6 0-2.74-.47-3.54-1.23a6.39 6.39 0 01-1.56-2.6l-.3-.92-.12-.38a8 8 0 00-.41-1.05c-.15-.3-.3-.5-.46-.63A.93.93 0 0010 7a.93.93 0 00-.6.2c-.17.12-.32.32-.47.62-.14.3-.27.64-.4 1.05l-.13.38-.3.92c-.32.9-.76 1.86-1.56 2.6A4.95 4.95 0 013 14v1c0 1.1.9 2 2 2h10a2 2 0 002-2v-1z" />
		</svg>
	)
}
export default BezierCurveSquareIcon
