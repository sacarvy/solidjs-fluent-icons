import { splitProps } from "solid-js"
function CropInterimIcon(props) {
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
			<path d="M12 5a1 1 0 100-2 1 1 0 000 2zm-2-1H7a2 2 0 01-1.77 1.99l-.47 4.16A2 2 0 016 12h5a2 2 0 011.24-1.85L11.77 6A2 2 0 0110 4zm1.27 9H5.73a2 2 0 11-1.96-2.99l.47-4.16A2 2 0 116.74 3h3.53a2 2 0 112.5 2.85l.46 4.16A2 2 0 1111.27 13zM3 12a1 1 0 102 0 1 1 0 00-2 0zm2-9a1 1 0 100 2 1 1 0 000-2zm7 9a1 1 0 102 0 1 1 0 00-2 0zm1.97-4.4A4.5 4.5 0 119.65 15h.85a.5.5 0 000-1h-2a.5.5 0 00-.5.5v2a.5.5 0 001 0v-.72A5.48 5.48 0 0018.5 12a5.5 5.5 0 00-4.65-5.43l.12 1.03z" />
		</svg>
	)
}
export default CropInterimIcon
