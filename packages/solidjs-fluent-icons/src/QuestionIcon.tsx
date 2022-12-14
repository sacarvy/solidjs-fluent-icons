import { splitProps, ComponentProps, JSX } from "solid-js"

function QuestionIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 3a4 4 0 00-4 4 .5.5 0 001 0 3 3 0 016 0c0 1.25-.7 1.86-1.58 2.62l-.03.03c-.86.73-1.89 1.62-1.89 3.35v.5a.5.5 0 001 0V13c0-1.25.7-1.86 1.58-2.62l.03-.03C12.97 9.62 14 8.73 14 7a4 4 0 00-4-4zm0 14a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default QuestionIcon
