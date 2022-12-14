import { splitProps } from "solid-js"
function ShareScreenPersonPIcon(props) {
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
			<path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v3.6c-.26-.4-.6-.72-1-.95V6.75C17 5.78 16.22 5 15.25 5H4.75C3.78 5 3 5.78 3 6.75v6.5c0 .97.78 1.75 1.75 1.75h6.75c-.22.3-.38.63-.45 1h-6.3A2.75 2.75 0 012 13.25v-6.5zM15.5 14a2 2 0 100-4 2 2 0 000 4zm0 5c2.5 0 3.5-1.25 3.5-2.5 0-.83-.67-1.5-1.5-1.5h-4c-.83 0-1.5.67-1.5 1.5 0 1.25 1 2.5 3.5 2.5zm-9-12a.5.5 0 00-.5.5v5a.5.5 0 001 0V11h1a2 2 0 100-4H6.5zM8 10H7V8h1a1 1 0 010 2z" />
		</svg>
	)
}
export default ShareScreenPersonPIcon
