import type { Component } from "solid-js"
import { AccessTimeIcon } from "solidjs-fluent-icons/filled"

import logo from "./logo.svg"
import styles from "./App.module.css"

const App: Component = () => {
	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt="logo" />
				<h1>
					<AccessTimeIcon class="text-rose-600" width="40" height="40" />
				</h1>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Solid
				</a>
			</header>
		</div>
	)
}

export default App
