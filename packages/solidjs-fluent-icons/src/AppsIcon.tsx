import { splitProps, ComponentProps, JSX } from "solid-js"

function AppsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 17A1.5 1.5 0 013 15.65V4.5c0-.78.6-1.42 1.36-1.5H9c.78 0 1.42.6 1.5 1.36v.4l2.19-2.27a1.5 1.5 0 012-.14l.12.1 2.76 2.72c.55.55.6 1.42.11 2.02l-.1.11-2.31 2.2h.23c.78 0 1.42.6 1.5 1.36v4.64c0 .78-.6 1.42-1.36 1.5H4.5zm5-6.5H4v5c0 .22.14.4.33.47l.08.02.09.01h5v-5.5zm6 0h-5V16h5a.5.5 0 00.5-.4V11a.5.5 0 00-.41-.5h-.09zm-5-2.79V9.5h1.79L10.5 7.71zM9 4.01H4.5a.5.5 0 00-.5.4v5.1h5.5v-5a.5.5 0 00-.33-.48l-.08-.02H9zm5.12-.84a.5.5 0 00-.64-.05l-.07.06-2.62 2.71a.5.5 0 00-.05.63l.06.07 2.61 2.62c.17.17.43.2.62.07l.08-.06 2.76-2.63a.5.5 0 00.05-.64l-.05-.06-2.75-2.72z" />
		</svg>
	)
}
export default AppsIcon
