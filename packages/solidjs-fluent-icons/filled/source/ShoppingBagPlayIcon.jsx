import { splitProps } from "solid-js"
function ShoppingBagPlayIcon(props) {
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
			<path d="M6 4.5V6H5a1 1 0 00-1 1v8a2.93 2.93 0 00.88 2.13A3 3 0 007 18h3.26a5.48 5.48 0 01.74-7.74V4.5a2.48 2.48 0 00-.33-1.24 1.48 1.48 0 012.21.66c.08.18.12.37.12.58V6h-1v3.6a5.48 5.48 0 014-.4V7a1 1 0 00-1-1h-1V4.5a2.48 2.48 0 00-4-2A2.54 2.54 0 008.5 2a2.42 2.42 0 00-1.77.73A2.43 2.43 0 006 4.5zM10 6H7V4.5a1.48 1.48 0 01.91-1.38 1.48 1.48 0 011.97.8c.08.18.12.37.12.58V6zm4.5 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.74-6.55c.1 0 .18.03.26.08l2.3 1.51c.07.05.12.1.16.18a.54.54 0 01-.03.54.46.46 0 01-.13.13l-2.3 1.57a.54.54 0 01-.12.06.45.45 0 01-.32-.02.57.57 0 01-.16-.1.5.5 0 01-.14-.36v-3.08a.51.51 0 01.3-.46.44.44 0 01.18-.05z" />
		</svg>
	)
}
export default ShoppingBagPlayIcon
