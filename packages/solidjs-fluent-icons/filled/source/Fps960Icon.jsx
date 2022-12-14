import { splitProps } from "solid-js"
function Fps960Icon(props) {
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
			<path d="M4.5 10A2.5 2.5 0 007 7.5v-3A2.5 2.5 0 104.5 7h.1c.32 0 .62-.06.9-.17v.67a1 1 0 01-1 1h-.25a.75.75 0 01-.75-.75.75.75 0 00-1.5 0C2 8.99 3 10 4.25 10h.25zm1-5.5v.1c0 .5-.4.9-.9.9h-.1a1 1 0 111-1zm5-2.5A2.5 2.5 0 008 4.5v3A2.5 2.5 0 1010.5 5h-.1c-.32 0-.62.06-.9.17V4.5a1 1 0 011-1h.25c.41 0 .75.34.75.75a.75.75 0 001.5 0C13 3.01 12 2 10.75 2h-.25zm-1 5.5v-.1c0-.5.4-.9.9-.9h.1a1 1 0 11-1 1zm6-3a1 1 0 112 0v3a1 1 0 11-2 0v-3zm1-2.5A2.5 2.5 0 0014 4.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0016.5 2zm-13 10a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H4v-2h2.5a.5.5 0 000-1h-3zm5 0a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1a2 2 0 100-4H8.5zm2.5 2a1 1 0 01-1 1H9v-2h1a1 1 0 011 1zm2-.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 01-1 0 .5.5 0 00-.5-.5h-.75a.75.75 0 000 1.5h.5a1.75 1.75 0 110 3.5h-.75a1.5 1.5 0 01-1.5-1.5.5.5 0 011 0c0 .28.22.5.5.5h.75a.75.75 0 000-1.5h-.5c-.97 0-1.75-.78-1.75-1.75z" />
		</svg>
	)
}
export default Fps960Icon
