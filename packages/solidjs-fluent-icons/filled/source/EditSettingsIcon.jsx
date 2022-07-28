import { splitProps } from "solid-js"
function EditSettingsIcon(props) {
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
			<path d="M12.92 2.87a2.97 2.97 0 014.2 4.21l-.66.67-4.2-4.2.66-.68zm-1.38 1.38l-8 8c-.32.33-.55.74-.65 1.2l-.88 3.94a.5.5 0 00.6.6l3.92-.87c.47-.1.9-.34 1.24-.68L8.2 16A5.5 5.5 0 0115 9.2l.75-.74-4.2-4.21zm-.47 7.2a2 2 0 01-1.43 2.47l-.46.12a4.7 4.7 0 000 1.02l.35.08A2 2 0 0111 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0116 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55zm2.43 4.05a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default EditSettingsIcon
