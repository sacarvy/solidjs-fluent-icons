import { splitProps, ComponentProps, JSX } from "solid-js"

function SlideArrowRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2.5a.5.5 0 000 1h5.23c.43-.4.93-.75 1.48-1H5.5zm0 2.5h4.1c-.16.32-.3.65-.4 1H5.5a.5.5 0 010-1zm-1 3h4.52c.03.34.1.68.19 1H4.5A2.5 2.5 0 012 13.5v-7A2.5 2.5 0 014.5 4h11A2.5 2.5 0 0118 6.5v3.76a5.5 5.5 0 00-1-.66V6.5c0-.83-.67-1.5-1.5-1.5h-11C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5zm14.5-.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default SlideArrowRightIcon
