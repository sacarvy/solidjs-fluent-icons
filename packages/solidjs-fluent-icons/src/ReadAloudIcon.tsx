import { splitProps, ComponentProps, JSX } from "solid-js"

function ReadAloudIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12.06 2.26a.5.5 0 01.68-.2A9.7 9.7 0 0118 9.94a.5.5 0 01-1 .12 8.7 8.7 0 00-4.74-7.12.5.5 0 01-.2-.68zm-3.6 2.05a.5.5 0 00-.92 0l-4.5 11a.5.5 0 10.92.38l1.54-3.76V12h5v-.07l1.54 3.76a.5.5 0 10.92-.38l-4.5-11zM10.12 11H5.88L8 5.82 10.12 11zm2.13-6.43a.5.5 0 00-.5.86 5.67 5.67 0 012.76 4.14.5.5 0 00.98-.14 6.67 6.67 0 00-3.24-4.86z" />
		</svg>
	)
}
export default ReadAloudIcon
