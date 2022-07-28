import { splitProps, ComponentProps, JSX } from "solid-js"

function SaveImageIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 6.13v2.9a3.53 3.53 0 00-.5-.03H16V6.13a.97.97 0 00-.29-.72L13.6 3.3A.96.96 0 0013 3V5.5a1.45 1.45 0 01-.44 1.06c-.14.13-.3.24-.48.32-.18.08-.38.12-.58.12h-4a1.45 1.45 0 01-1.05-.44 1.6 1.6 0 01-.33-.48A1.33 1.33 0 016 5.5V3H5a.97.97 0 00-.7.29c-.1.1-.17.2-.22.32A.86.86 0 004 4v10c0 .13.03.27.08.4.05.1.12.22.2.31.1.1.2.17.32.21.13.05.26.08.4.08v-4.5a1.45 1.45 0 01.44-1.05c.14-.14.3-.25.48-.33.18-.08.38-.12.58-.12h6c-.96 0-1.82.38-2.45 1H6.5a.5.5 0 00-.5.5V15h3v1H5c-.26 0-.52-.05-.76-.16a2.2 2.2 0 01-.64-.42 1.9 1.9 0 01-.6-1.38V4c0-.26.05-.52.16-.76.1-.24.24-.45.42-.64A1.9 1.9 0 014.96 2h7.92c.26 0 .52.05.76.15.25.1.47.25.65.44L16.4 4.7c.19.19.34.4.43.65.1.24.16.5.16.77zM7 3v2.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5V3H7zm3 9.5a2.5 2.5 0 012.5-2.5h4a2.5 2.5 0 012.5 2.5v4c0 .5-.15.98-.41 1.38l-3.03-3.03a1.5 1.5 0 00-2.12 0l-3.03 3.03c-.26-.4-.41-.87-.41-1.38v-4zm7 .25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-5.88 5.84c.4.26.87.41 1.38.41h4c.5 0 .98-.15 1.38-.41l-3.03-3.03a.5.5 0 00-.7 0l-3.03 3.03z" />
		</svg>
	)
}
export default SaveImageIcon
