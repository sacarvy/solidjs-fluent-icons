import { splitProps, ComponentProps, JSX } from "solid-js"

function FlashOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.27 5.98L2.15 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-5.3-5.29-5 5.11c-.75.79-2.05.06-1.8-1L6.24 12H4.96c-.7 0-1.21-.68-1.02-1.36l1.33-4.66zm5.88 5.88L6.08 6.79 4.9 10.92c-.01.04.02.08.06.08h1.9a.5.5 0 01.5.62l-1.33 5.3v.04l.03.03.04.01h.01l.02-.02 5.02-5.12zm3.66-3.74l-2.26 2.3.7.72 2.28-2.32c.65-.68.18-1.82-.76-1.82H12.2l1.27-3.6c.23-.69-.28-1.4-1.01-1.4H7.21c-.47 0-.89.31-1.02.77L5.9 3.78l.81.8.44-1.53c0-.03.03-.05.06-.05h5.25c.04 0 .07.04.06.08l-1.5 4.25a.5.5 0 00.48.67h3.3l.02.04.01.05-.02.03z" />
		</svg>
	)
}
export default FlashOffIcon
