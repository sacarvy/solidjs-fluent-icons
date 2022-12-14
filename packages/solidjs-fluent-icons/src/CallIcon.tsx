import { splitProps, ComponentProps, JSX } from "solid-js"

function CallIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.99 2.07l-.72.21a3.5 3.5 0 00-2.45 2.86c-.3 2.06.36 4.48 1.96 7.25 1.6 2.77 3.36 4.55 5.3 5.33a3.5 3.5 0 003.7-.7l.55-.52a2 2 0 00.25-2.62L14.22 12a1.5 1.5 0 00-1.65-.56l-2.05.63-.06.01c-.22.04-.74-.45-1.4-1.58-.67-1.18-.82-1.87-.63-2.04l1.05-.98a2.5 2.5 0 00.57-2.85l-.66-1.47a2 2 0 00-2.4-1.1zm1.49 1.5l.66 1.47a1.5 1.5 0 01-.35 1.71l-1.04.98c-.67.63-.45 1.71.45 3.27.85 1.47 1.62 2.19 2.45 2.06l.12-.02 2.09-.64a.5.5 0 01.55.19l1.36 1.88a1 1 0 01-.13 1.3l-.54.52a2.5 2.5 0 01-2.65.5c-1.7-.68-3.3-2.3-4.8-4.9-1.5-2.59-2.1-4.8-1.84-6.61a2.5 2.5 0 011.75-2.04l.72-.22a1 1 0 011.2.55z" />
		</svg>
	)
}
export default CallIcon
