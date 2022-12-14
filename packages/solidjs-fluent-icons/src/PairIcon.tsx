import { splitProps, ComponentProps, JSX } from "solid-js"

function PairIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 3.5c0 .65.42 1.2 1 1.41v6.18A1.5 1.5 0 104.91 13H7v2.09A1.5 1.5 0 108.91 17h6.18A1.5 1.5 0 1017 15.09V8.9A1.5 1.5 0 1015.09 7H13V4.91A1.5 1.5 0 1011.09 3H4.9A1.5 1.5 0 002 3.5zM8.91 16a1.5 1.5 0 00-.91-.91V13h3.09A1.5 1.5 0 1013 11.09V8h2.09c.15.43.48.76.91.91v6.18a1.5 1.5 0 00-.91.91H8.9zM4 11.09V4.9c.43-.15.76-.48.91-.91h6.18c.15.43.48.76.91.91V7H8.91A1.5 1.5 0 107 8.91V12H4.91a1.5 1.5 0 00-.91-.91zm8 0a1.5 1.5 0 00-.91.91H8V8.91c.43-.15.76-.48.91-.91H12v3.09z" />
		</svg>
	)
}
export default PairIcon
