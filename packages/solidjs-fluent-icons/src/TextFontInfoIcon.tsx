import { splitProps, ComponentProps, JSX } from "solid-js"

function TextFontInfoIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.96 3.84a.5.5 0 00-.94-.02L4.29 11h-.02v.05l-1.24 3.27a.5.5 0 00.94.36L4.98 12h3.23c.1-.35.23-.68.39-1H5.36l2.1-5.54 1.65 4.73c.23-.3.48-.58.77-.83L7.96 3.84zm5.54 7.04a.62.62 0 100 1.24.62.62 0 000-1.24zm0 5.12a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v2c0 .28.22.5.5.5zm0-7a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 8a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
		</svg>
	)
}
export default TextFontInfoIcon
