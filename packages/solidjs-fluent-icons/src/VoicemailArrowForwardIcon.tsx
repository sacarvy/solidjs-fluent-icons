import { splitProps, ComponentProps, JSX } from "solid-js"

function VoicemailArrowForwardIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M8.73 9A2 2 0 117 8h6a2 2 0 011.74 1 5.6 5.6 0 00-1.3.1 1 1 0 00-1.33.45c-.4.19-.76.42-1.1.7A2.02 2.02 0 0111.27 9H8.73zM6 10a1 1 0 102 0 1 1 0 00-2 0zm11-4v3.6c.36.18.7.4 1 .66V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.2c-.08-.32-.15-.66-.18-1H4a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1zm-7 8.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm5.4-2.6c.2-.2.5-.2.7 0l1.75 1.75a.5.5 0 010 .7L16.1 16.1a.5.5 0 01-.7-.7l.9-.9h-1.55c-.97 0-1.75.78-1.75 1.75v.25a.5.5 0 01-1 0v-.25a2.75 2.75 0 012.75-2.75h1.54l-.9-.9a.5.5 0 010-.7z" />
		</svg>
	)
}
export default VoicemailArrowForwardIcon
