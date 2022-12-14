import { splitProps } from "solid-js"
function AnimalRabbitIcon(props) {
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
			<path d="M12.68 4.38l4.23 4.23a2.78 2.78 0 01-2.6 4.67v.16c0 .86-.7 1.56-1.57 1.56H11v-1.25c0-.54-.28-.98-.67-1.28-.38-.3-.9-.47-1.43-.47H7.5a.5.5 0 100 1h1.4c.33 0 .62.1.82.26.2.15.28.33.28.49V15H5.56C4.7 15 4 14.3 4 13.44V11.4v-.18A2.12 2.12 0 116.05 8.3C6.5 8.11 7 8 7.52 8h3.28c.47 0 .92.1 1.33.26l.08-.13c.11-.19.23-.4.38-.55l-1.55-1.56a1.16 1.16 0 111.64-1.64z" />
		</svg>
	)
}
export default AnimalRabbitIcon
