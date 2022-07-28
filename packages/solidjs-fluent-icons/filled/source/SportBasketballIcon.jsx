import { splitProps } from "solid-js"
function SportBasketballIcon(props) {
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
			<path d="M4.7 4A7.97 7.97 0 019 2.06c.07.43.14.91.24 1.4.18.9.43 1.89.78 2.79.28.71.62 1.4 1.06 1.96L10 9.3 4.7 4zm-.7.7A7.97 7.97 0 002.06 9c.43.07.9.14 1.4.24.9.18 1.89.43 2.79.78.71.28 1.4.62 1.96 1.06L9.29 10 4 4.7zm3.5 7.1c-.43-.32-.99-.6-1.61-.85-.83-.31-1.75-.55-2.62-.72-.45-.1-.88-.17-1.27-.22 0 2.02.76 3.87 2 5.28l3.5-3.5zM4.7 16l3.5-3.5c.32.43.6.98.85 1.61.31.83.55 1.75.72 2.62.1.45.17.88.22 1.27a7.97 7.97 0 01-5.28-2zm4.22-4.21L10 10.71 15.3 16a7.97 7.97 0 01-4.3 1.94c-.07-.43-.15-.91-.25-1.4-.18-.9-.43-1.89-.77-2.79a7.57 7.57 0 00-1.06-1.96zm7.08 3.5a7.97 7.97 0 001.94-4.3 17.37 17.37 0 01-4.18-1.02 7.57 7.57 0 01-1.97-1.05L10.7 10 16 15.3zM12.5 8.2c.43.33.98.6 1.61.85.83.32 1.75.55 2.62.72.45.1.88.17 1.27.22 0-2.02-.76-3.87-2-5.28l-3.5 3.5zM15.3 4A7.97 7.97 0 0010 2c.06.4.14.82.23 1.27.17.87.4 1.8.72 2.62.24.63.53 1.18.85 1.6L15.3 4z" />
		</svg>
	)
}
export default SportBasketballIcon
