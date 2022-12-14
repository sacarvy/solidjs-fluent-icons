import { splitProps } from "solid-js"
function SpeakerOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L5.29 6H3.5C2.67 6 2 6.67 2 7.5v5c0 .83.67 1.5 1.5 1.5h2.6a.5.5 0 01.35.13l3.87 3.6a1 1 0 001.68-.74v-4.28l5.15 5.14a.5.5 0 00.7-.7l-2.56-2.57L2.85 2.15zm13.11 2.52a8 8 0 01.66 9.83l-.73-.73a7 7 0 00-.68-8.44.5.5 0 11.75-.66zm-1.2 2.58c1 1.74.95 3.8.04 5.43l-.74-.74a4.5 4.5 0 00-.17-4.19.5.5 0 11.87-.5zM12 3.01v6.87L7.25 5.13l3.07-2.86a1 1 0 011.68.74z" />
		</svg>
	)
}
export default SpeakerOffIcon
