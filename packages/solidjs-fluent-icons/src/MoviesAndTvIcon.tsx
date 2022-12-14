import { splitProps, ComponentProps, JSX } from "solid-js"

function MoviesAndTvIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16.13 5.38L7.03 8h9.47c.28 0 .5.22.5.5v7a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 15.5V8.57l-.26-.9a2.5 2.5 0 011.71-3.09L13.1 2.1a2.5 2.5 0 013.1 1.7l.27.97a.5.5 0 01-.34.62zM3.84 7.88l.6-.17L5.9 5.2l-1.16.33A1.5 1.5 0 003.7 7.4l.14.48zm2-.57l2.11-.61L9.4 4.2l-2.13.61-.02.04-1.42 2.46zm5.62-1.63l1.44-2.5-2.12.62-.03.05L9.34 6.3l2.12-.62zm2.68-2.65c0 .02 0 .03-.02.04l-1.27 2.22 2.52-.73-.14-.48a1.5 1.5 0 00-1.09-1.05zM4 9v6.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V9H4z" />
		</svg>
	)
}
export default MoviesAndTvIcon
