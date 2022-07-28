import { splitProps } from "solid-js"
function MeetNowIcon(props) {
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
			<path d="M6.9 2.03a7.07 7.07 0 00-1.15.54h-.02v.01L6 3l-.28-.42a.5.5 0 00.56.84 1.87 1.87 0 01.22-.13A8.1 8.1 0 0110 2.5a8.1 8.1 0 013.5.79 3.69 3.69 0 01.22.12l.26-.39-.26.4a.5.5 0 10.56-.84L14 3l.28-.42h-.01l-.02-.01a2.83 2.83 0 00-.3-.17A9.1 9.1 0 0010 1.5a9.1 9.1 0 00-3.1.53zm-.62 1.39zm7.44 0zM6.9 17.97c.73.27 1.8.53 3.11.53a9.1 9.1 0 003.96-.9 4.63 4.63 0 00.29-.17h.02v-.01L14 17l.28.42a.5.5 0 00-.56-.84l.26.4-.26-.4a1.74 1.74 0 01-.22.13 8.1 8.1 0 01-3.5.79 8.1 8.1 0 01-3.5-.79 3.66 3.66 0 01-.22-.12.5.5 0 00-.56.83L6 17l-.28.42h.01l.02.01a2.64 2.64 0 00.3.17c.19.1.48.24.84.37zm-.61-1.39zm7.44 0zM2.5 7v6c0 1.1.9 2 2 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-6a2 2 0 00-2 2zm11 4.55l2.78 2.26a.75.75 0 001.22-.59V6.78a.75.75 0 00-1.22-.59L13.5 8.45v3.1z" />
		</svg>
	)
}
export default MeetNowIcon
