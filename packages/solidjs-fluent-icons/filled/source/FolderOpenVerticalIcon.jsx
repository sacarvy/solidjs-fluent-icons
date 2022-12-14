import { splitProps } from "solid-js"
function FolderOpenVerticalIcon(props) {
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
			<path d="M4.14 2.87c-.1.2-.14.4-.14.63v10.63a2.5 2.5 0 001.6 2.33l4.36 1.68c.35.14.72.13 1.04.02V6.56a1.5 1.5 0 00-.96-1.39l-5.9-2.3zm.8-.76l5.47 2.13A2.5 2.5 0 0112 6.57V16h1.5c.83 0 1.5-.67 1.5-1.5v-2.94l.96-3.82c.02-.12.04-.24.04-.36V3.5c0-.83-.67-1.5-1.5-1.5h-9c-.2 0-.4.04-.57.11z" />
		</svg>
	)
}
export default FolderOpenVerticalIcon
