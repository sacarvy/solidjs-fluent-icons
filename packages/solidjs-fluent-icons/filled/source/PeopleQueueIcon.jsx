import { splitProps } from "solid-js"
function PeopleQueueIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 21 20"
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
			<path d="M9.17 5.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM4.42 8a1 1 0 00-1 1v4.5a3.5 3.5 0 107 0V9a1 1 0 00-1-1h-5zm5.75-2.75c0 .65-.2 1.26-.52 1.76a2 2 0 011.08.48l.19.01A2.25 2.25 0 109.6 3.42c.36.52.57 1.15.57 1.83zm-.25 11.6a4.49 4.49 0 001.5-3.35V9a2 2 0 00-.27-1h2.27a1 1 0 011 1v4.5a3.5 3.5 0 01-4.5 3.35zm4.25-11.6c0 .65-.2 1.26-.52 1.76a2 2 0 011.08.48l.19.01a2.25 2.25 0 10-1.32-4.08c.36.52.57 1.15.57 1.83zm-.25 11.6a4.49 4.49 0 001.5-3.35V9a2 2 0 00-.27-1h2.27a1 1 0 011 1v4.5a3.5 3.5 0 01-4.5 3.35z" />
		</svg>
	)
}
export default PeopleQueueIcon
