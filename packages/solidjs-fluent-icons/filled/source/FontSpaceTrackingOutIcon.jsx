import { splitProps } from "solid-js"
function FontSpaceTrackingOutIcon(props) {
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
			<path d="M6 2c.31 0 .59.2.7.48l3.25 8.5a.75.75 0 01-1.4.53L7.78 9.5H4.22l-.77 2.01a.75.75 0 01-1.4-.53l3.25-8.5A.75.75 0 016 2zM4.8 8h2.4L6 4.85 4.8 8zm9.88 5.26a.75.75 0 011.06-.07l2 1.74a.75.75 0 010 1.13l-2 1.75a.75.75 0 11-.99-1.12l.5-.44H4.75l.5.44a.75.75 0 11-1 1.12l-2-1.74a.75.75 0 010-1.13l2-1.75a.75.75 0 011 1.12l-.5.44h10.5l-.5-.44a.75.75 0 01-.07-1.05zm.02-1.74a.75.75 0 01-1.4 0l-3.25-8.5a.75.75 0 011.4-.53L14 9.15l2.55-6.66a.75.75 0 011.4.53l-3.25 8.5z" />
		</svg>
	)
}
export default FontSpaceTrackingOutIcon
