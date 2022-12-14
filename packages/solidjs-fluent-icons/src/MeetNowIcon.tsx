import { splitProps, ComponentProps, JSX } from "solid-js"

function MeetNowIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 5a2 2 0 00-2 2v6c0 1.1.9 2 2 2h6a2 2 0 002-2v-1.03l2.84 1.85a.75.75 0 001.16-.63V6.8c0-.6-.66-.95-1.16-.63L13 8.03V7a2 2 0 00-2-2H5zm8 4.22l3-1.95v5.46l-3-1.95V9.22zM12 7v6a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h6a1 1 0 011 1zM6.9 2.03a7.07 7.07 0 00-1.15.54h-.02v.01L6 3l-.28-.42a.5.5 0 00.56.84 1.87 1.87 0 01.22-.13A8.1 8.1 0 0110 2.5a8.1 8.1 0 013.5.79 3.69 3.69 0 01.22.12l.26-.39-.26.4a.5.5 0 10.56-.84L14 3l.28-.42h-.01l-.02-.01a2.83 2.83 0 00-.3-.17A9.1 9.1 0 0010 1.5a9.1 9.1 0 00-3.1.53zm-.62 1.39zm7.44 0zM6.9 17.97c.73.27 1.8.53 3.11.53a9.1 9.1 0 003.96-.9 4.63 4.63 0 00.29-.17h.02v-.01L14 17l.28.42a.5.5 0 00-.56-.84l.26.4-.26-.4a1.74 1.74 0 01-.22.13 8.1 8.1 0 01-3.5.79 8.1 8.1 0 01-3.5-.79 3.66 3.66 0 01-.22-.12.5.5 0 00-.56.83L6 17l-.28.42h.01l.02.01a2.64 2.64 0 00.3.17c.19.1.48.24.84.37zm-.61-1.39zm7.44 0z" />
		</svg>
	)
}
export default MeetNowIcon
