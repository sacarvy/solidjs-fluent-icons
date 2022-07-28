import { splitProps } from "solid-js"
function BluetoothSearchingIcon(props) {
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
			<path d="M9.53 2.04c-.3.11-.5.4-.5.71v5.88l-1.8-1.46a.75.75 0 00-.95 1.16L8.34 10l-2.06 1.67a.75.75 0 10.94 1.16l1.82-1.46v5.88a.75.75 0 001.33.47l3.46-4.25a.75.75 0 00-.1-1.05l-3-2.42 3-2.42a.75.75 0 00.1-1.05l-3.46-4.25a.75.75 0 00-.84-.24zm1 9.73l1.66 1.34-1.65 2.03v-3.37zm0-3.54V4.86l1.66 2.03-1.65 1.34zm6.72-1.9a.75.75 0 011 .35 7.72 7.72 0 010 6.64.75.75 0 01-1.35-.64 6.22 6.22 0 000-5.36.75.75 0 01.35-1zm-1.04 1.94a.75.75 0 10-1.42.5 3.74 3.74 0 010 2.47.75.75 0 101.42.49 5.24 5.24 0 000-3.46z" />
		</svg>
	)
}
export default BluetoothSearchingIcon
