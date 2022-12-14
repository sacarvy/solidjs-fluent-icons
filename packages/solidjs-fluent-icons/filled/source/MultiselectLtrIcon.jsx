import { splitProps } from "solid-js"
function MultiselectLtrIcon(props) {
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
			<path d="M6.25 3.2c.31.27.33.74.06 1.05l-2.25 2.5a.75.75 0 01-1.09.03L1.72 5.53a.75.75 0 011.06-1.06l.7.7 1.71-1.92a.75.75 0 011.06-.06zM8 5.24c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 018 5.25zm0 5c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zm.75 4.25a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm-2.44-.25a.75.75 0 10-1.12-1l-1.72 1.91-.69-.69a.75.75 0 00-1.06 1.06l1.25 1.25a.75.75 0 001.09-.03l2.25-2.5z" />
		</svg>
	)
}
export default MultiselectLtrIcon
