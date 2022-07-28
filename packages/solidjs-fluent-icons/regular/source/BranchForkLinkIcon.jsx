import { splitProps } from "solid-js"
function BranchForkLinkIcon(props) {
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
			<path d="M5 2a3 3 0 01.5 5.96V10H11c.83 0 1.5-.67 1.5-1.5v-.54a3 3 0 111 0v.54A2.5 2.5 0 0111 11H5.5v1.04a3 3 0 11-1 0V7.96A3 3 0 015 2zM3 5a2 2 0 104 0 2 2 0 00-4 0zm0 10a2 2 0 104 0 2 2 0 00-4 0zm10-8a2 2 0 100-4 2 2 0 000 4zm-.5 6a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default BranchForkLinkIcon
