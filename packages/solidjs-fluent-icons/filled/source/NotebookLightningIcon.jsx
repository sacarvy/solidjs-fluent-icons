import { splitProps } from "solid-js"
function NotebookLightningIcon(props) {
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
			<path d="M3 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H9.74A5.5 5.5 0 003 9.6V4zm2.5 1a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-7zm11 1H16v2.5h.5A.5.5 0 0017 8V6.5a.5.5 0 00-.5-.5zM16 9.5h.5c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H16V9.5zm.5 3.5H16v2.5h.5a.5.5 0 00.5-.5v-1.5a.5.5 0 00-.5-.5zm-11 6a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1.13-3.66h-.6c-.2 0-.32-.2-.25-.39l1.1-2.78c.04-.1.13-.17.24-.17h1.83c.18 0 .3.19.25.37l-.31.97c-.05.17.07.33.24.33h.23c.36 0 .54.46.27.72l-2.56 2.53c-.2.2-.5 0-.44-.27l.24-1a.25.25 0 00-.24-.31z" />
		</svg>
	)
}
export default NotebookLightningIcon
