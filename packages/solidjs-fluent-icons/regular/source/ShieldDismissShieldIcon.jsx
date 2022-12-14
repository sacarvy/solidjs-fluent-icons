import { splitProps } from "solid-js"
function ShieldDismissShieldIcon(props) {
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
			<path d="M10.28 2.08a.5.5 0 00-.56 0 15.05 15.05 0 01-6.3 2.43A.5.5 0 003 5v4.5c0 3.9 2.3 6.73 6.82 8.47a.5.5 0 00.36 0c.34-.14.68-.27 1-.42-.2-.27-.38-.56-.52-.86-.21.1-.43.18-.66.27-4.03-1.6-6-4.07-6-7.46V5.43a15.97 15.97 0 005.6-2.08l.4-.25.4.25A15.97 15.97 0 0016 5.43v3a5.06 5.06 0 001 .8V5a.5.5 0 00-.43-.5 15.05 15.05 0 01-6.3-2.42zm-.24 8.67c.11-.47.46-.87.94-1.02l1.87-1.88a.5.5 0 00-.7-.7L10 9.29 7.85 7.15a.5.5 0 10-.7.7L9.29 10l-2.14 2.15a.5.5 0 00.7.7L10 10.71l.04.04zm6.96-.4a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0013 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 00-.4-.33 4.24 4.24 0 01-1.6-.32z" />
		</svg>
	)
}
export default ShieldDismissShieldIcon
