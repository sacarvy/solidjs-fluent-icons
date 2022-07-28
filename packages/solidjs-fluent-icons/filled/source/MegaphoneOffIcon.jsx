import { splitProps } from "solid-js"
function MegaphoneOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L5.48 6.2l-2.37.63A1.5 1.5 0 002 8.27v2.5c0 .65.41 1.23 1.03 1.43l1.97.66v.89a3.25 3.25 0 006.27 1.2l4.46 1.49 1.42 1.41a.5.5 0 00.7-.7l-15-15zM6 13.19l4.32 1.44A2.25 2.25 0 016 13.75v-.56zm12 1.92c0 .23-.05.44-.14.63L7.71 5.6l8.4-2.24A1.5 1.5 0 0118 4.8v10.31z" />
		</svg>
	)
}
export default MegaphoneOffIcon
