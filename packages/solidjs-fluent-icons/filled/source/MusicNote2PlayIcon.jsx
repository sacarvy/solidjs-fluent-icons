import { splitProps } from "solid-js"
function MusicNote2PlayIcon(props) {
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
			<path d="M15.99 3.02a1 1 0 00-1.29-.8l-7 2.2a1 1 0 00-.7.95v8.13a2.5 2.5 0 101 2V8.37l7-2.19v2.84c.34.03.68.1 1 .19V3.18l-.01-.16zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.26-.44l-3-1.65a.5.5 0 00-.74.44v3.3c0 .38.4.62.74.44l3-1.65a.5.5 0 000-.88z" />
		</svg>
	)
}
export default MusicNote2PlayIcon
