function Navbar() {
    const navbar = document.createElement('div');
    navbar.innerHTML = `
        <button id="function1">Function 1</button>
        <button id="function2">Function 2</button>
        <button id="function3">Function 3</button>
    `;
    return navbar;
}
