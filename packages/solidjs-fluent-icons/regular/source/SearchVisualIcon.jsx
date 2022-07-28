import { splitProps } from "solid-js"
function SearchVisualIcon(props) {
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
			<path d="M14 3a3 3 0 013 3v1.5a.5.5 0 01-1 0V6a2 2 0 00-2-2h-1.5a.5.5 0 010-1H14zM6 3a3 3 0 00-3 3v1.5a.5.5 0 001 0V6c0-1.1.9-2 2-2h1.5a.5.5 0 000-1H6zm8 14a3 3 0 003-3v-1.5a.5.5 0 00-1 0V14a2 2 0 01-2 2h-1.5a.5.5 0 000 1H14zM3 14a3 3 0 003 3h1.5a.5.5 0 000-1H6a2 2 0 01-2-2v-1.5a.5.5 0 00-1 0V14zm7-2a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2zM6.5 7.25a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default SearchVisualIcon
