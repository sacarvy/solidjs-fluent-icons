import { splitProps } from "solid-js"
function ChevronUpDownIcon(props) {
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
			<path d="M15.1 7.3a.75.75 0 01-1.13.98L10 4.31 6.03 8.28l-.08.07a.75.75 0 01-.98-1.13l4.5-4.5.08-.07c.3-.22.71-.2.98.07l4.5 4.5.07.08zM4.9 12.7a.75.75 0 011.13-.98L10 15.69l3.97-3.97.08-.07a.75.75 0 01.98 1.13l-4.5 4.5-.08.07c-.3.22-.71.2-.98-.07l-4.5-4.5-.07-.08z" />
		</svg>
	)
}
export default ChevronUpDownIcon
