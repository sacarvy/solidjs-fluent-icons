import { splitProps } from "solid-js"
function DualScreenLockIcon(props) {
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
			<path d="M14.5 3v1H14a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1V5a1 1 0 00-1-1h-.5V3a2 2 0 10-4 0zm1 1V3a1 1 0 112 0v1h-2zm1 2.25a.75.75 0 110 1.5.75.75 0 010-1.5zM12 9V6h-1.5v12H16a2 2 0 002-2v-5h-4a2 2 0 01-2-2zM4 6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.5V6H4zm2 9.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6 0c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DualScreenLockIcon
