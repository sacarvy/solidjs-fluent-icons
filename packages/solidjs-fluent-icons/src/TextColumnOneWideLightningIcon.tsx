import { splitProps, ComponentProps, JSX } from "solid-js"

function TextColumnOneWideLightningIcon(
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
			<path d="M3.5 5a.5.5 0 000 1h13a.5.5 0 000-1h-13zm0 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zM9 14.5c0-.17 0-.34.02-.5H3.5a.5.5 0 000 1h5.52a5.57 5.57 0 01-.02-.5zm.6-2.5c.18-.36.4-.7.66-1H3.5a.5.5 0 000 1h6.1zm9.4 2.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.12-3a.5.5 0 00-.47.33l-.88 2.5A.5.5 0 0013 15h.78l-.51 1.87a.5.5 0 00.9.4l2.25-3.5A.5.5 0 0016 13h-.75l.28-.84a.5.5 0 00-.47-.66h-1.18z" />
		</svg>
	)
}
export default TextColumnOneWideLightningIcon
