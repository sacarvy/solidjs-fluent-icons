import { splitProps } from "solid-js"
function ContactCardGroupIcon(props) {
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
			<path d="M12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-8-.75c0-.41.34-.75.75-.75h3a.75.75 0 01.75.75v.81c-.02.16-.1.58-.5.92-.33.29-.86.52-1.75.52C4 13 4 11.5 4 11.5v-.75zM6.25 9a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm4.25-1a1 1 0 11-2 0 1 1 0 012 0zm-1.07 3.98c-.03.15-.1.33-.2.52h.27c.83 0 1.5-.67 1.5-1.5a1 1 0 00-1-1h-.67c.11.23.17.48.17.75V11.57a1.84 1.84 0 01-.07.4zM4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zM3 6.5C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 13.5v-7z" />
		</svg>
	)
}
export default ContactCardGroupIcon
