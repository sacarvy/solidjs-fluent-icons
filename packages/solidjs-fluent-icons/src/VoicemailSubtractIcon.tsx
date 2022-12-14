import { splitProps, ComponentProps, JSX } from "solid-js"

function VoicemailSubtractIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
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
			<path d="M6.33 5a1.75 1.75 0 11-1.58-1h4.5c.7 0 1.3.41 1.59 1.01a5.59 5.59 0 00-1.26.07.75.75 0 00-.95.25c-.4.14-.77.33-1.12.56A1.78 1.78 0 017.67 5H6.33zM4 5.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm8-3.25v2.7c.35.1.68.24 1 .4V2.5c0-.83-.67-1.5-1.5-1.5h-9C1.67 1 1 1.67 1 2.5V9c0 .83.67 1.5 1.5 1.5H5c0-.34.03-.68.1-1H2.5A.5.5 0 012 9V2.5c0-.28.22-.5.5-.5h9c.28 0 .5.22.5.5zm3 8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default VoicemailSubtractIcon
