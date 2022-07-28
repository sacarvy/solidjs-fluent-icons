import { splitProps } from "solid-js"
function PairIcon(props) {
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
			<path d="M2 3.5c0 .56.3 1.04.75 1.3v6.4a1.5 1.5 0 102.05 2.05h1.95v1.95a1.5 1.5 0 102.05 2.05h6.4a1.5 1.5 0 102.05-2.05V8.8a1.5 1.5 0 10-2.05-2.05h-1.95V4.8a1.5 1.5 0 10-2.05-2.05H4.8A1.5 1.5 0 002 3.5zm6.8 12.25a1.5 1.5 0 00-.55-.55v-1.95h2.95a1.5 1.5 0 102.05-2.05V8.25h1.95c.13.23.32.42.55.55v6.4a1.5 1.5 0 00-.55.55H8.8zM4.25 11.2V4.8c.23-.13.42-.32.55-.55h6.4c.13.23.32.42.55.55v1.95H8.8A1.5 1.5 0 106.75 8.8v2.95H4.8a1.5 1.5 0 00-.55-.55zm7.5 0a1.5 1.5 0 00-.55.55H8.25V8.8c.23-.13.42-.32.55-.55h2.95v2.95z" />
		</svg>
	)
}
export default PairIcon
