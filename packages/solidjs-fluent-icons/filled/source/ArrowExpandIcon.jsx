import { splitProps } from "solid-js"
function ArrowExpandIcon(props) {
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
			<path d="M3.75 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0V5.56l2.22 2.22a.75.75 0 001.06-1.06L5.56 4.5h1.69a.75.75 0 000-1.5h-3.5zm0 14a.75.75 0 01-.75-.75v-3.5a.75.75 0 011.5 0v1.69l2.22-2.22a.75.75 0 011.06 1.06L5.56 15.5h1.69a.75.75 0 010 1.5h-3.5zM17 3.75a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h1.69l-2.22 2.22a.75.75 0 001.06 1.06l2.22-2.22v1.69a.75.75 0 001.5 0v-3.5zM16.25 17c.41 0 .75-.34.75-.75v-3.5a.75.75 0 00-1.5 0v1.69l-2.22-2.22a.75.75 0 10-1.06 1.06l2.22 2.22h-1.69a.75.75 0 000 1.5h3.5z" />
		</svg>
	)
}
export default ArrowExpandIcon
