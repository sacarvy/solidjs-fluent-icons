import { splitProps } from "solid-js"
function BookThetaIcon(props) {
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
			<path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8zM7 9c0-1.06.3-2.04.83-2.77A2.7 2.7 0 0110 5c.9 0 1.66.5 2.17 1.23.52.73.83 1.71.83 2.77s-.3 2.04-.83 2.77A2.7 2.7 0 0110 13c-.9 0-1.66-.5-2.17-1.23A4.79 4.79 0 017 9zm4.97.5H8.03c.07.67.3 1.25.6 1.68.4.54.88.82 1.37.82.49 0 .97-.28 1.36-.82.31-.43.54-1.01.61-1.68zm0-1a3.62 3.62 0 00-.6-1.68C10.96 6.28 10.48 6 10 6c-.49 0-.97.28-1.36.82a3.62 3.62 0 00-.61 1.68h3.94z" />
		</svg>
	)
}
export default BookThetaIcon
