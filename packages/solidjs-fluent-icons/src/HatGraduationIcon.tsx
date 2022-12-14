import { splitProps, ComponentProps, JSX } from "solid-js"

function HatGraduationIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.5 3.4a3 3 0 013 0l7.25 4.17a.5.5 0 010 .86L16 10.01v4.49a.5.5 0 01-.15.35v.01l-.03.03a3.88 3.88 0 01-.38.32A9.1 9.1 0 0110 17a9.1 9.1 0 01-5.74-2.05 3.81 3.81 0 01-.08-.07.53.53 0 01-.18-.39v-4.49L2 8.86v4.64a.5.5 0 11-1 0V8c0-.19.1-.35.26-.44L8.51 3.4zm3 9.2a3 3 0 01-3 0L5 10.59v3.69l.17.14A8.1 8.1 0 0010 16a8.1 8.1 0 005-1.72v-3.7l-3.5 2.02zM11 4.27a2 2 0 00-2 0L2.5 8 9 11.73a2 2 0 002 0L17.5 8 11 4.27z" />
		</svg>
	)
}
export default HatGraduationIcon
