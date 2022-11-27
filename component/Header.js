import html from "../core.js";
function Header() {
  return html`<header class="header">
    <h1>Todos</h1>
    <input
      class="new-todo"
      placeholder="Let me remind you what needs to be done?"
      autofocus
      onkeyup="event.keyCode === 13 && dispatch('add', this.value)"
    />
  </header>`;
}
export default Header;
