import { splitProps } from "solid-js"
function GasIcon(props) {
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
			<path d="M11.08 2.22A.5.5 0 0111.5 2h3c.28 0 .5.22.5.5v3c.6.46 1 1.18 1 2v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 014 14.5v-7A2.5 2.5 0 016.5 5h.41c-.2-.58-.76-1-1.41-1h-1a.5.5 0 010-1h1c1.2 0 2.22.86 2.45 2h1.28l1.85-2.78zM14 3h-2.23l-1.34 2h3.07c.17 0 .34.02.5.05V3zm-1.15 5.15a.5.5 0 00-.7 0L10 10.29 7.85 8.15a.5.5 0 10-.7.7L9.29 11l-2.14 2.15a.5.5 0 00.7.7L10 11.71l2.15 2.14a.5.5 0 00.7-.7L10.71 11l2.14-2.15a.5.5 0 000-.7z" />
		</svg>
	)
}
export default GasIcon
