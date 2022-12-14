import { splitProps } from "solid-js"
function WandIcon(props) {
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
			<path d="M17 2.5a.5.5 0 00-1 0V3h-.5a.5.5 0 000 1h.5v.5a.5.5 0 001 0V4h.5a.5.5 0 000-1H17v-.5zm-10 3a.5.5 0 01-.5.5H6v.5a.5.5 0 01-1 0V6h-.5a.5.5 0 010-1H5v-.5a.5.5 0 011 0V5h.5c.28 0 .5.22.5.5zm9 9a.5.5 0 01-.5.5H15v.5a.5.5 0 01-1 0V15h-.5a.5.5 0 010-1h.5v-.5a.5.5 0 011 0v.5h.5c.28 0 .5.22.5.5zm-2.57-7.93a1.91 1.91 0 00-2.7 0l-.48.47 2.7 2.71.48-.48c.75-.74.75-1.96 0-2.7zm-1.18 3.89l-2.7-2.71-6.99 6.98a1.91 1.91 0 102.7 2.7l6.99-6.97z" />
		</svg>
	)
}
export default WandIcon
