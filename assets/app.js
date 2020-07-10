class GithubRepoElement extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        var shadow = this.attachShadow({mode: 'open'});

        // Create spans
        var wrapper = document.createElement('a');
        wrapper.setAttribute("class","github-repo");
        const link = document.createAttribute("href");
        link.value = `https://github.com/${this.innerHTML}`
        wrapper.attributes.setNamedItem(link);
        wrapper.innerText = this.innerHTML;

        var style = document.createElement('style');
        style.textContent = '.github-repo { color: #0FA0CE; }'
        shadow.appendChild(style)

        shadow.appendChild(wrapper);
    }
}
customElements.define('github-repo', GithubRepoElement)
