import { splitProps } from "solid-js"
function PersonSwapIcon(props) {
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
			<path d="M9 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.29 0 .57 0 .85-.03l-1.41-1.4a1.5 1.5 0 010-2.13l2-2A1.5 1.5 0 0112.9 14h1.18a1.5 1.5 0 011.65-1.98A2 2 0 0014 11H4zm7.85 6.85a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L10.71 15h5.58l-1.14-1.15a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L16.29 16h-5.58l1.14 1.15c.2.2.2.5 0 .7z" />
		</svg>
	)
}
export default PersonSwapIcon
