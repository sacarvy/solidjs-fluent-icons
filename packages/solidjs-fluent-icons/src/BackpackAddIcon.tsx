import { splitProps, ComponentProps, JSX } from "solid-js"

function BackpackAddIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 2a2.5 2.5 0 00-2.5 2.5v.04A6 6 0 004 10v5a3 3 0 003 3h3.26a5.5 5.5 0 01-.66-1H7a2 2 0 01-2-2v-2h2v1.5a.5.5 0 001 0V13h1.2c.1-.35.24-.68.4-1H5v-2a5 5 0 019.9-.99c.36.03.71.1 1.05.18a6 6 0 00-3.45-4.65V4.5A2.5 2.5 0 0010 2zm0 2c-.5 0-1 .06-1.47.18a1.5 1.5 0 012.94 0A6.01 6.01 0 0010 4zm1.34 6c.46-.33.98-.59 1.54-.76.08-.16.12-.35.12-.54 0-.94-.76-1.7-1.7-1.7H8.7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.04zM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3zm11 5.8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default BackpackAddIcon
