import { splitProps } from "solid-js"
function FolderLinkIcon(props) {
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
			<path d="M4.5 3A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h2.26c-.2-.3-.38-.64-.5-1H4.5A1.5 1.5 0 013 14.5v-7h4.07c.41 0 .8-.17 1.09-.47L9.62 5.5h5.88c.83 0 1.5.67 1.5 1.5v3.26c.36.12.7.3 1 .5V7a2.5 2.5 0 00-2.5-2.5H9.67l-1.6-1.2a1.5 1.5 0 00-.9-.3H4.5zM3 5.5C3 4.67 3.67 4 4.5 4h2.67c.1 0 .21.04.3.1l1.22.92-1.26 1.32a.5.5 0 01-.36.16H3v-1zm5 9a2.5 2.5 0 012.5-2.5h1a.5.5 0 000-1h-1a3.5 3.5 0 100 7h1a.5.5 0 000-1h-1A2.5 2.5 0 018 14.5zm10 0a2.5 2.5 0 00-2.5-2.5h-1a.5.5 0 010-1h1a3.5 3.5 0 110 7h-1a.5.5 0 010-1h1a2.5 2.5 0 002.5-2.5zm-8 0c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default FolderLinkIcon
