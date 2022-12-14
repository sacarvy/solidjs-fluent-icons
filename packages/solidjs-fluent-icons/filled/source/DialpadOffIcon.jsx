import { splitProps } from "solid-js"
function DialpadOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l3.9 3.9H6a1.25 1.25 0 101.25 1.2l2.8 2.8H10a1.25 1.25 0 101.25 1.2l5.9 5.9a.5.5 0 00.7-.7l-15-15zM15.25 12c0 .31-.12.6-.3.82l-1.77-1.76a1.25 1.25 0 012.07.94zm-4-4c0 .31-.12.6-.3.82L9.17 7.06a1.25 1.25 0 012.07.94zm-4-4c0 .31-.12.6-.3.82L5.17 3.06A1.25 1.25 0 017.25 4zm0 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM10 5.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM11.25 16a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM14 5.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM15.25 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
		</svg>
	)
}
export default DialpadOffIcon
