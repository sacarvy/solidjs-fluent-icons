import { splitProps } from "solid-js"
function TableDismissIcon(props) {
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
			<path d="M13 7h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-6 5V8H3v4h4zm2.6 0A5.52 5.52 0 0112 9.6V8H8v4h1.6zm4.9-3c.9 0 1.75.22 2.5.6V8h-4v1.2c.48-.13.98-.2 1.5-.2zM9 14.5c0-.52.07-1.02.2-1.5H8v4h1.6c-.38-.75-.6-1.6-.6-2.5zM7 13H3v1.5A2.5 2.5 0 005.5 17H7v-4zm5-6V3H8v4h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm12 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.8 0l1.15-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15z" />
		</svg>
	)
}
export default TableDismissIcon
