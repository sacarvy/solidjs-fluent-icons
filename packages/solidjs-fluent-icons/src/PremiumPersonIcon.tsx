import { splitProps, ComponentProps, JSX } from "solid-js"

function PremiumPersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 3a.5.5 0 00-.43.24l-3 5a.5.5 0 00.05.58l7.49 9a.5.5 0 00.86-.13L13.84 9h3.9l.14-.18a.5.5 0 00.05-.58l-3-5A.5.5 0 0014.5 3h-9zm7.27 6L10 16.12 7.23 9h5.54zM3.38 8l2.4-4h1.98l-1.6 4H3.38zm2.78 1l2.26 5.83L3.57 9h2.59zm1.08-1l1.6-4h2.32l1.6 4H7.24zm6.6 0l-1.6-4h1.98l2.4 4h-2.78zm1.66 6a2 2 0 100-4 2 2 0 000 4zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5z" />
		</svg>
	)
}
export default PremiumPersonIcon
