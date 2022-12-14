import { splitProps, ComponentProps, JSX } from "solid-js"

function TextBulletListSquareWarningIcon(
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
			<path d="M3 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6.87l-.98-1.7-.02-.04V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3.61l-.3.53c-.1.15-.16.3-.21.47H5a2 2 0 01-2-2V5zm6.76 9l.58-1H8.5a.5.5 0 000 1h1.26zm2.02-3.5l.2-.34c.15-.26.34-.48.57-.66H8.5a.5.5 0 000 1h3.28zM7 6.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5zM7 13.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8.5 6a.5.5 0 000 1h5a.5.5 0 000-1h-5zm5.15 4.05a1.34 1.34 0 011.5.61l3.67 6.37a1.3 1.3 0 01-.5 1.8c-.2.1-.42.17-.65.17h-7.34A1.33 1.33 0 019 17.68c0-.23.06-.45.17-.65l3.67-6.37c.18-.31.48-.52.8-.61zm.85 2.45a.5.5 0 10-1 0V15a.5.5 0 101 0v-2.5zM14 18a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default TextBulletListSquareWarningIcon
