import { splitProps } from "solid-js"
function GuitarIcon(props) {
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
			<path d="M9.7 11.7a1 1 0 11-1.4-1.4 1 1 0 011.4 1.4zm5.56-9.39a1.09 1.09 0 011.53 0l.9.9c.42.42.42 1.1 0 1.53l-4.37 4.38a2.13 2.13 0 01-.76 3.16l-.68.34a.6.6 0 00-.32.66v.06a3.72 3.72 0 01-1.4 3.7 4.8 4.8 0 01-6.27-.44l-.49-.5a4.8 4.8 0 01-.44-6.25 3.72 3.72 0 013.7-1.42l.06.01a.6.6 0 00.66-.32l.34-.68a2.13 2.13 0 013.16-.76l4.38-4.37zm.83.7a.09.09 0 00-.13 0L14.8 4.19l1.02 1.02 1.16-1.16a.09.09 0 000-.13l-.9-.9zm-.98 2.9l-1.02-1.02-2.84 2.84a.5.5 0 01-.7 0l-.13-.13a1.13 1.13 0 00-1.8.3l-.35.67a1.6 1.6 0 01-1.75.85h-.05c-1.03-.21-2.08.19-2.71 1.03a3.8 3.8 0 00.35 4.95l.49.49a3.8 3.8 0 004.95.35 2.72 2.72 0 001.04-2.7l-.02-.07c-.14-.7.21-1.42.86-1.75l.68-.33c.69-.35.83-1.26.3-1.8l-.14-.14a.5.5 0 010-.7l2.84-2.84z" />
		</svg>
	)
}
export default GuitarIcon
