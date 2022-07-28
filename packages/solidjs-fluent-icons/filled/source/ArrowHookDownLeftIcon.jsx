import { splitProps } from "solid-js"
function ArrowHookDownLeftIcon(props) {
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
			<path d="M6 4.75c0-.41.34-.75.75-.75h4.5c1.59 0 2.7.62 3.53 1.59C15.6 6.54 16 7.79 16 9c0 1.22-.3 2.46-1.12 3.41A4.62 4.62 0 0111.25 14H6.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 01.02-1.08l3.5-3.25a.75.75 0 011.02 1.1l-2.1 1.95h4.59c1.16 0 1.86-.44 2.4-1.07.55-.64.85-1.52.85-2.43 0-.9-.3-1.79-.85-2.43a2.92 2.92 0 00-2.4-1.07h-4.5A.75.75 0 016 4.75z" />
		</svg>
	)
}
export default ArrowHookDownLeftIcon
