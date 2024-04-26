import { createSignal } from "solid-js"

export function App() {
    return (
        <div class="flex flex-col min-h-screen justify-center items-center">
            <Counter />
            <Counter />
        </div >
    )
}

export function Counter() {
    const [count, setCount] = createSignal(0)
    return (
        <button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full m-1"
            onClick={() => setCount(count() + 1)}>
            click me {count()}!
        </button>
    )
}