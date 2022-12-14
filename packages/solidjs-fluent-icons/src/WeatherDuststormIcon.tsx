import { splitProps, ComponentProps, JSX } from "solid-js"

function WeatherDuststormIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 1a.5.5 0 100 1 .5.5 0 000-1zm9.11-7.78a2.4 2.4 0 01.17 4.78H14.3c.22.35.34.75.34 1.18 0 1.22-.91 2.19-2.12 2.19-1.2 0-1.9-.7-2.1-1.66a.5.5 0 11.98-.2c.1.53.44.86 1.12.86.64 0 1.12-.51 1.12-1.19 0-.57-.4-1.04-.96-1.15l-.14-.02H2.51a.5.5 0 01-.1-1H15.62A1.4 1.4 0 0017 10.74v-.14a1.4 1.4 0 00-2.78-.08.5.5 0 11-1-.06 2.4 2.4 0 012.4-2.25zM9.77 3.55a3.23 3.23 0 01.01 6.46H2.51a.5.5 0 01-.1-.99H9.78a2.23 2.23 0 10-2.24-2.24.5.5 0 01-1 0 3.23 3.23 0 013.24-3.23zM3.5 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 1a.5.5 0 100 1 .5.5 0 000-1zm13-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 1a.5.5 0 100 1 .5.5 0 000-1z" />
		</svg>
	)
}
export default WeatherDuststormIcon
