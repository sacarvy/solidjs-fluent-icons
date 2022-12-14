import { splitProps } from "solid-js"
function OpenFolderIcon(props) {
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
			<path d="M3 6.25C3 4.45 4.46 3 6.25 3H14c1.8 0 3.25 1.46 3.25 3.25v2a.75.75 0 01-1.5 0v-2c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v7.5c0 .97.78 1.75 1.75 1.75h4a.75.75 0 010 1.5h-4A3.25 3.25 0 013 13.75v-7.5zm5 2.5c0-.41.34-.75.75-.75h4.5a.75.75 0 010 1.5h-2.69l5.22 5.22a.75.75 0 11-1.06 1.06L9.5 10.56v2.69a.75.75 0 01-1.5 0v-4.5z" />
		</svg>
	)
}
export default OpenFolderIcon
