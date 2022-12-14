import { splitProps } from "solid-js"
function VehicleTruckCubeIcon(props) {
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
			<path d="M1.5 7.88V4.12a1 1 0 01.55-.9l3-1.5a1 1 0 01.9 0l3 1.5a1 1 0 01.55.9v3.76a1 1 0 01-.55.9l-3 1.5a1 1 0 01-.9 0l-3-1.5a1 1 0 01-.55-.9zm1.04-3.57a.5.5 0 00.27.65L5 5.9V8.5a.5.5 0 101 0V5.89l2.2-.93a.5.5 0 00-.4-.92l-2.3.97-2.3-.97a.5.5 0 00-.66.27zm-.5 9.94V9.89l1 .5v3.86c0 .41.34.75.75.75h.26a2.5 2.5 0 014.9 0h1.1A2.5 2.5 0 0113 13.05v-8.3a.75.75 0 00-.75-.75H10.5a2 2 0 00-.34-1h2.1c.96 0 1.74.78 1.74 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 01-4.9 0h-1.1a2.5 2.5 0 01-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75zm12.91.75h1.55a.5.5 0 00.5-.5V11h-3v2.5c.48.36.83.89.95 1.5zm1.74-5l-1.36-2.72a.5.5 0 00-.45-.28H14v3h2.7zM5 15.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm7.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
		</svg>
	)
}
export default VehicleTruckCubeIcon
