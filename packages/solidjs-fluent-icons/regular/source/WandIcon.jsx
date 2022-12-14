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
			<path d="M16.5 2c.28 0 .5.22.5.5V3h.5a.5.5 0 010 1H17v.5a.5.5 0 01-1 0V4h-.5a.5.5 0 110-1h.5v-.5c0-.28.22-.5.5-.5zm-10 4a.5.5 0 000-1H6v-.5a.5.5 0 00-1 0V5h-.5a.5.5 0 000 1H5v.5a.5.5 0 001 0V6h.5zm9 9a.5.5 0 000-1H15v-.5a.5.5 0 00-1 0v.5h-.5a.5.5 0 100 1h.5v.5a.5.5 0 101 0V15h.5zm-2.07-8.43a1.91 1.91 0 00-2.7 0l-8.17 8.16a1.91 1.91 0 102.7 2.7l8.17-8.16c.75-.74.75-1.96 0-2.7zm-2 .7a.91.91 0 011.3 1.3l-.48.47-1.3-1.29.48-.48zm-1.18 1.19l1.3 1.29-6.99 6.98a.91.91 0 01-1.3-1.29l6.99-6.98z" />
		</svg>
	)
}
export default WandIcon
