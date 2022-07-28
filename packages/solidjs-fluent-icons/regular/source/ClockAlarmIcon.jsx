import { splitProps } from "solid-js"
function ClockAlarmIcon(props) {
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
			<path d="M10 6.5a.5.5 0 00-1 0v4c0 .28.22.5.5.5h3a.5.5 0 100-1H10V6.5zM3.35 7.8A3.19 3.19 0 015.17 2c1.07 0 2.02.54 2.6 1.37a7 7 0 014.46 0A3.16 3.16 0 0118 5.16c0 1.08-.54 2.04-1.36 2.61a7 7 0 01-1.35 6.8l1.56 1.57a.5.5 0 01-.7.7l-1.57-1.56a6.97 6.97 0 01-9.16 0l-1.57 1.56a.5.5 0 11-.7-.7l1.56-1.57A6.97 6.97 0 013.35 7.8zM3 5.19c0 .66.3 1.25.75 1.65a7.03 7.03 0 013.06-3.07C6.41 3.3 5.82 3 5.17 3 3.97 3 3 3.98 3 5.19zm13.24 1.64a2.17 2.17 0 10-3.06-3.07 7.03 7.03 0 013.06 3.07zM4 10a6 6 0 1012 0 6 6 0 00-12 0z" />
		</svg>
	)
}
export default ClockAlarmIcon
