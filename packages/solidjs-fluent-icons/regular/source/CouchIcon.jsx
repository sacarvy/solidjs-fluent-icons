import { splitProps } from "solid-js"
function CouchIcon(props) {
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
			<path d="M5 6.5v1.52c1.03.14 1.84.95 1.98 1.98h6.04A2.32 2.32 0 0115 8.02V6.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5zM4 8.02V6.5C4 5.67 4.67 5 5.5 5h9c.83 0 1.5.67 1.5 1.5v1.52c1.13.13 2 1.1 2 2.26v3.22c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 13.5v-3.22c0-1.17.87-2.13 2-2.26zM15.32 9c-.73 0-1.32.59-1.32 1.32 0 .37-.3.68-.68.68H6.68a.68.68 0 01-.68-.68C6 9.59 5.41 9 4.68 9h-.4C3.58 9 3 9.57 3 10.28v3.22c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-3.22c0-.7-.57-1.28-1.28-1.28h-.4z" />
		</svg>
	)
}
export default CouchIcon
