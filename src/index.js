import { $ } from "https://deno.land/x/freact/bundle.js";

function App() {
    return $.Fragment({},
        $.div({}, "Hello World")
    )
}

ReactDOM.createRoot(document.getElementById("app")).render(
    App()
)