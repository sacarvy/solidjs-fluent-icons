import { splitProps } from "solid-js"
function FilterDismissIcon(props) {
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
			<path d="M11.73 10.25A5.46 5.46 0 0014 11c0 .41-.34.75-.75.75h-8.5a.75.75 0 010-1.5h6.98zM9.03 6c.04.52.16 1.03.34 1.5H2.75a.75.75 0 010-1.5h6.27zM12 15.25a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5c.41 0 .75-.34.75-.75zM14.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-6.35c.2.2.2.5 0 .7L15.21 5.5l1.14 1.15a.5.5 0 01-.7.7L14.5 6.21l-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default FilterDismissIcon
