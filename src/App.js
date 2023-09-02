import { $ } from "https://deno.land/x/freact/bundle.js";


export function App() {


    return $.Fragment({},
        $.div({}, "Hello, world!")
    )
}