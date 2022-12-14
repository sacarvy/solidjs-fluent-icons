import { splitProps } from "solid-js"
function BorderTopIcon(props) {
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
			<path d="M12 16.25c0 .41-.34.75-.75.75h-2.5a.75.75 0 010-1.5h2.5c.41 0 .75.34.75.75zM8.73 3H6a3 3 0 00-2.81 1.96.75.75 0 001.38.58l.03-.07A1.5 1.5 0 016 4.5h8a1.5 1.5 0 011.43 1.04.75.75 0 001.38-.58A3 3 0 0014 3h-2.73-2.52-.02zm6.67 11.55a1.5 1.5 0 01-.94.88.75.75 0 00.58 1.38 3 3 0 001.77-1.77.75.75 0 10-1.41-.49zm-9.95.85a1.5 1.5 0 01-.88-.94.75.75 0 00-1.38.58 3 3 0 001.77 1.77.75.75 0 10.5-1.41zM17 8.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM3.75 8c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75z" />
		</svg>
	)
}
export default BorderTopIcon
