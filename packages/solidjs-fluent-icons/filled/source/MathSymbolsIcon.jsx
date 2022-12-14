import { splitProps } from "solid-js"
function MathSymbolsIcon(props) {
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
			<path d="M4.75 5.25v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2zM11 4.5c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 0111 4.5zm-8.78 6.78l2.22 2.22-2.22 2.22a.75.75 0 101.06 1.06l2.22-2.22 2.22 2.22a.75.75 0 001.06-1.06L6.56 13.5l2.22-2.22a.75.75 0 10-1.06-1.06L5.5 12.44l-2.22-2.22a.75.75 0 10-1.06 1.06zm9.53 1.47a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM15.5 11a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default MathSymbolsIcon
