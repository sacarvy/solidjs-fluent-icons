import { splitProps, ComponentProps, JSX } from "solid-js"

function WeatherRainShowersNightIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M11 6c2.47 0 3.87 1.58 4.07 3.48h.06A2.82 2.82 0 0118 12.25 2.82 2.82 0 0115.13 15h-.7l-.01.03-1.5 2.7a.5.5 0 01-.9-.39l.03-.08L13.3 15h-1.85l-.01.03-1.49 2.7a.5.5 0 01-.91-.39l.03-.08L10.31 15H8.44l-1.5 2.74a.5.5 0 01-.6.23l-.07-.03a.5.5 0 01-.24-.6l.04-.08L7.3 15h-.42A2.82 2.82 0 014 12.25c0-1.47 1.2-2.68 2.7-2.76h.24C7.14 7.56 8.54 6 11 6zm0 1a3.04 3.04 0 00-3.08 3.03c0 .28-.26.5-.55.5h-.55c-1 0-1.82.78-1.82 1.74S5.82 14 6.82 14h8.37c1 0 1.81-.78 1.81-1.74s-.8-1.74-1.81-1.74h-.55c-.3 0-.55-.22-.55-.5A3.02 3.02 0 0011 7.01zM5.85 2.02a4.24 4.24 0 013.87 3.14c-.38.08-.74.2-1.07.36A3.05 3.05 0 007 3.38c-.18-.1-.34-.17-.53-.24a5.87 5.87 0 01-.63 3.44 5 5 0 01-2.55 1.9 4.58 4.58 0 001.37.8c-.34.22-.64.5-.88.8l-.29-.14a4.24 4.24 0 01-1.37-1.27.63.63 0 01.3-.95c1.38-.5 2.12-1.04 2.54-1.85.47-.89.55-1.82.24-3.08-.1-.41.23-.8.65-.78z" />
		</svg>
	)
}
export default WeatherRainShowersNightIcon
