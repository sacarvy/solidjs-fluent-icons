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
			<path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm11 9.92a3.5 3.5 0 01-1.86-.88 5.42 5.42 0 01-1.3-2.2l-.28-.87-.13-.41a8.91 8.91 0 00-.47-1.19c-.18-.36-.41-.7-.74-.96C10.9 6.14 10.48 6 10 6s-.89.14-1.22.4c-.33.26-.56.6-.74.97-.18.36-.33.78-.47 1.19l-.13.4c-.09.3-.18.58-.29.87-.3.86-.67 1.64-1.29 2.21a3.5 3.5 0 01-1.86.88V5a1 1 0 011-1h10a1 1 0 011 1v7.92zM4 13.93a4.55 4.55 0 002.54-1.16c.8-.74 1.24-1.7 1.56-2.6l.3-.92.12-.38c.14-.4.27-.76.41-1.05.15-.3.3-.5.46-.63.16-.12.34-.19.61-.19.27 0 .45.07.6.2.17.12.32.32.47.62a8 8 0 01.4 1.05l.13.38.3.92c.32.9.76 1.86 1.56 2.6.63.59 1.45 1 2.54 1.16V15a1 1 0 01-1 1H5a1 1 0 01-1-1v-1.07z" />
		</svg>
	)
}
export default BezierCurveSquareIcon
