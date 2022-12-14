import { splitProps } from "solid-js"
function PatchIcon(props) {
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
			<path d="M8.27 3.06l1.02 1.03-5.2 5.2-1.03-1.02a2.5 2.5 0 010-3.54l1.67-1.67a2.5 2.5 0 013.54 0zm3.46 13.88l-1.02-1.03 5.2-5.2 1.03 1.02a2.5 2.5 0 010 3.54l-1.67 1.67a2.5 2.5 0 01-3.54 0zm-8.67-5.2a2.5 2.5 0 000 3.53l1.67 1.67a2.5 2.5 0 003.54 0l8.67-8.67a2.5 2.5 0 000-3.54l-1.67-1.67a2.5 2.5 0 00-3.54 0l-8.67 8.67zM10 8.5a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zM8.5 10a.5.5 0 11-1 0 .5.5 0 011 0zm3.5.5a.5.5 0 110-1 .5.5 0 010 1zM10.5 12a.5.5 0 11-1 0 .5.5 0 011 0z" />
		</svg>
	)
}
export default PatchIcon
