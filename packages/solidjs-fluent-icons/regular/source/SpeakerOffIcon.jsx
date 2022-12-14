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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L5.29 6H3.5C2.68 6 2 6.67 2 7.5v5c0 .83.68 1.5 1.5 1.5H6.1a.5.5 0 01.34.13l3.88 3.6a1 1 0 001.68-.74V12.7l5.15 5.15a.5.5 0 00.7-.7l-2.56-2.57L2.85 2.15zM11 11.7V17l-3.88-3.6A1.5 1.5 0 006.1 13H3.5a.5.5 0 01-.5-.5v-5c0-.28.22-.5.5-.5h2.6l.18-.01L11 11.7zM11 3v5.88l1 1V3a1 1 0 00-1.68-.74L7.25 5.12l.7.71L11 3.01zm3.06 8.94l.74.74a5.5 5.5 0 00-.04-5.43.5.5 0 00-.86.5 4.5 4.5 0 01.16 4.19zm1.84 1.84l.72.72a8 8 0 00-.66-9.83.5.5 0 10-.74.66 7 7 0 01.68 8.45z" />
		</svg>
	)
}
export default SpeakerOffIcon
