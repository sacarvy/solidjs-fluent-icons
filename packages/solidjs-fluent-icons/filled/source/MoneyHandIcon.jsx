import { splitProps } from "solid-js"
function MoneyHandIcon(props) {
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
			<path d="M3 3.5C3 2.67 3.67 2 4.5 2h7c.83 0 1.5.67 1.5 1.5v1.8l3.27 3.26c.47.47.73 1.1.73 1.77v7.17a.5.5 0 01-1 0v-7.17c0-.4-.16-.78-.44-1.06L13 6.7v3.08l.85.86a.5.5 0 01-.7.7l-3-3c-.43-.42-.66-.4-.76-.38-.18.05-.33.19-.54.4-.1.09-.15.18-.13.32.03.18.17.49.63.96.98.97 1.1 1.1 1.22 1.2l.28.3c.1.09.15.22.15.35 0 .77 0 1.55.22 2.14.1.28.24.49.42.62.18.14.45.24.86.24.28 0 .5.22.5.5v1.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 16.5v-13zm5 4a2.5 2.5 0 101.9 4.12l-.04-.05-1.21-1.22a2.85 2.85 0 01-.91-1.51c-.08-.52.13-.93.41-1.2l.04-.04.1-.08L8 7.5zm2 9v.5h1v-.5c0-.28.22-.5.5-.5h.5v-.54c-.37-.06-.68-.2-.95-.4-.6.2-1.05.77-1.05 1.44zM4 5h.5C5.33 5 6 4.33 6 3.5V3H5v.5a.5.5 0 01-.5.5H4v1zm6-1.5c0 .83.67 1.5 1.5 1.5h.5V4h-.5a.5.5 0 01-.5-.5V3h-1v.5zm-4 13c0-.83-.67-1.5-1.5-1.5H4v1h.5c.28 0 .5.22.5.5v.5h1v-.5z" />
		</svg>
	)
}
export default MoneyHandIcon
