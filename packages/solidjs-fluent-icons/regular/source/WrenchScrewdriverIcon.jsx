import { splitProps } from "solid-js"
function WrenchScrewdriverIcon(props) {
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
			<path d="M17 15.55V10.5c0-.11-.03-.2-.07-.27a.37.37 0 00-.17-.15.87.87 0 00-.24-.06 2.08 2.08 0 00-.25-.02H16V5.12l.13-.24.17-.32.14-.32c.04-.1.06-.18.06-.24s-.03-.17-.07-.32a7.43 7.43 0 00-.34-1c-.05-.15-.1-.26-.11-.34a.57.57 0 00-.2-.25.47.47 0 00-.28-.09h-2c-.1 0-.2.04-.3.1a.46.46 0 00-.18.24 13.58 13.58 0 01-.3.86 43.7 43.7 0 00-.22.8c0 .07.02.16.06.25a7.72 7.72 0 00.44.87V10h-.27c-.09 0-.18 0-.26.02a.72.72 0 00-.24.07.44.44 0 00-.17.14.48.48 0 00-.06.27v5.05c0 .34.07.66.2.96a2.58 2.58 0 001.35 1.3 2.47 2.47 0 001.9 0c.3-.14.57-.31.8-.53.23-.22.41-.48.55-.77.13-.3.2-.62.2-.96zM15 10h-1V5a.5.5 0 00-.05-.23l-.41-.8.32-.97h1.28l.32.96-.4.81A.5.5 0 0015 5v5zm-2 2v-1h3v1h-3zm3 1v2.5c0 .2-.03.4-.12.58a1.5 1.5 0 01-1.96.8A1.5 1.5 0 0113 15.5V13h3zM6 2.54a.5.5 0 00-.69-.46 4.5 4.5 0 00-.31 8.2V16a2 2 0 004 0v-5.72a4.5 4.5 0 00-.31-8.2.5.5 0 00-.69.46V6a1 1 0 11-2 0V2.54zM3.5 6.25c0-1.19.6-2.24 1.5-2.87V6a2 2 0 104 0V3.38a3.5 3.5 0 01-.69 6.12.5.5 0 00-.31.46V16a1 1 0 11-2 0V9.96a.5.5 0 00-.31-.46A3.5 3.5 0 013.5 6.25z" />
		</svg>
	)
}
export default WrenchScrewdriverIcon
