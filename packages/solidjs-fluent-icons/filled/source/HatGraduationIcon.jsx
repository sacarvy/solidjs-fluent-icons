import { splitProps } from "solid-js"
function HatGraduationIcon(props) {
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
			<path d="M4 14.5v-3.33l4 2.3a4 4 0 004 0l4-2.3v3.33a.5.5 0 01-.15.35v.01l-.03.03a3.66 3.66 0 01-.38.32A9.1 9.1 0 0110 17a9.1 9.1 0 01-5.74-2.05 3.6 3.6 0 01-.08-.07l-.02-.03A.51.51 0 014 14.5zm14.75-6.07l-7.26 4.17a3 3 0 01-2.98 0L2 8.86v4.64a.5.5 0 01-1 0V8c0-.19.1-.36.26-.44L8.51 3.4a3 3 0 012.98 0l7.26 4.17a.5.5 0 010 .86z" />
		</svg>
	)
}
export default HatGraduationIcon
