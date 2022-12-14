import { splitProps, ComponentProps, JSX } from "solid-js"

function FoodGrainsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.43 2.21a.65.65 0 00-.86 0 5.73 5.73 0 00-1.74 5.74 7.11 7.11 0 00-4.2-.96.66.66 0 00-.61.72 6.99 6.99 0 001.65 3.77c-.35-.02-.7-.02-1.05 0a.66.66 0 00-.6.73A6.37 6.37 0 009.36 18h1.28c3.3 0 6.04-2.51 6.34-5.8a.66.66 0 00-.6-.71c-.35-.03-.7-.03-1.05-.01a6.99 6.99 0 001.65-3.77.66.66 0 00-.6-.72 7.1 7.1 0 00-4.21.96c.52-2-.06-4.24-1.74-5.74zM10 14.43a7.15 7.15 0 00-3.47-2.6 6.17 6.17 0 01-2.47-3.86c1.54-.05 3 .5 4.12 1.45.76.64.97 1.23 1.15 1.76l.22.54a.5.5 0 00.9 0l.22-.54c.18-.53.4-1.12 1.15-1.76a6.12 6.12 0 014.12-1.45 6.17 6.17 0 01-2.5 3.9A7.15 7.15 0 0010 14.42zM9.36 17a5.37 5.37 0 01-5.3-4.53 6.13 6.13 0 015.5 3.13.5.5 0 00.88 0 6.13 6.13 0 015.5-3.13 5.37 5.37 0 01-5.3 4.53H9.36zM10 9.82a4.74 4.74 0 010-6.64 4.74 4.74 0 010 6.64z" />
		</svg>
	)
}
export default FoodGrainsIcon
