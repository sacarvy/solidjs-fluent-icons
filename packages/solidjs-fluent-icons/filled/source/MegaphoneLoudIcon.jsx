import { splitProps } from "solid-js"
function MegaphoneLoudIcon(props) {
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
			<path d="M14.16 1.03c.26.08.4.37.31.63l-.5 1.5a.5.5 0 01-.94-.32l.5-1.5a.5.5 0 01.63-.31zm3.7 1.82a.5.5 0 10-.71-.7l-2 2a.5.5 0 00.7.7l2-2zm-10.25.3a2 2 0 013.26-.52l6.58 6.98a2 2 0 01-.64 3.2l-3.94 1.74a3.5 3.5 0 01-6.34 2.8l-1.2.52a1.5 1.5 0 01-1.67-.3l-1.22-1.22a1.5 1.5 0 01-.3-1.7l5.47-11.5zm-.16 13.78a2.5 2.5 0 004.5-1.97l-4.5 1.97zM17 6a.5.5 0 000 1h1.5a.5.5 0 100-1H17z" />
		</svg>
	)
}
export default MegaphoneLoudIcon
