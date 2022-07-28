import { splitProps } from "solid-js"
function BookGlobeIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6zm4 10.5l-.04-.02a.62.62 0 01-.15-.14 2.76 2.76 0 01-.4-.82A9.4 9.4 0 019.01 9h1.98a9.4 9.4 0 01-.4 2.52c-.13.38-.27.65-.4.82a.62.62 0 01-.15.14.15.15 0 01-.03.02H10zM13.97 9a4 4 0 01-2.6 3.26l.17-.42c.25-.76.41-1.75.45-2.84h1.98zm0-1h-1.98a10.43 10.43 0 00-.61-3.26A4 4 0 0113.97 8zm-5.35 4.26A4 4 0 016.03 9h1.98a10.43 10.43 0 00.61 3.26zM6.03 8a4 4 0 012.6-3.26l-.17.42c-.25.76-.41 1.75-.45 2.84H6.03zM10 4.5l.04.02c.04.02.09.06.15.14.13.17.27.44.4.82.21.64.36 1.52.4 2.52H9.01c.04-1 .19-1.88.4-2.52.13-.38.27-.65.4-.82a.62.62 0 01.15-.14.15.15 0 01.03-.02H10z" />
		</svg>
	)
}
export default BookGlobeIcon
