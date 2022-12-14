import { splitProps } from "solid-js"
function FoodGrainsIcon(props) {
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
			<path d="M10.43 2.21a.65.65 0 00-.86 0 5.72 5.72 0 00-1.92 4.35c0 .18.1.34.24.43A7.4 7.4 0 019.63 8.4a.5.5 0 00.74 0 7.4 7.4 0 011.74-1.42.5.5 0 00.24-.43c.02-1.59-.62-3.2-1.92-4.35zm-7.41 10a.66.66 0 01.6-.72A6.36 6.36 0 0110 15.33a6.36 6.36 0 016.38-3.84c.36.03.64.35.6.72A6.37 6.37 0 0110.64 18h-.46c-.06 0-.12 0-.18-.02a.66.66 0 01-.18.02h-.46a6.37 6.37 0 01-6.34-5.8zM10 10.83a6.36 6.36 0 00-6.38-3.84.66.66 0 00-.6.72c.08.9.35 1.75.76 2.5a.5.5 0 00.44.26c2.1.01 4.02.92 5.36 2.39.11.12.27.18.42.16a.5.5 0 00.42-.16 7.36 7.36 0 015.36-2.4.5.5 0 00.44-.25c.41-.75.68-1.6.76-2.5a.66.66 0 00-.6-.72A6.36 6.36 0 0010 10.83z" />
		</svg>
	)
}
export default FoodGrainsIcon
