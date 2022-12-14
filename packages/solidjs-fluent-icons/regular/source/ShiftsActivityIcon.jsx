import { splitProps } from "solid-js"
function ShiftsActivityIcon(props) {
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
			<path d="M10 2.48a.5.5 0 01-.46.53 7 7 0 107.45 7.45.5.5 0 111 .07 8 8 0 11-8.52-8.51.5.5 0 01.53.46zm1 .07a.5.5 0 01.6-.4c.56.12 1.1.3 1.6.52a.5.5 0 11-.4.91c-.44-.2-.91-.34-1.4-.44a.5.5 0 01-.4-.59zm6.34 4.25a.5.5 0 10-.92.4c.2.45.34.91.44 1.4a.5.5 0 00.98-.2 7.95 7.95 0 00-.5-1.6zM14.4 3.92a.5.5 0 01.7-.07c.4.33.75.69 1.08 1.08a.5.5 0 11-.78.63c-.28-.34-.6-.66-.93-.94a.5.5 0 01-.07-.7zM10 5.5a.5.5 0 00-1 0v5c0 .28.22.5.5.5h3a.5.5 0 100-1H10V5.5z" />
		</svg>
	)
}
export default ShiftsActivityIcon
