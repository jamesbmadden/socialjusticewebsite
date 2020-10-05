import { LitElement, html, css, property } from 'lit-element';

export default class ResourcesTabs extends LitElement {

  @property() selected = 0;

  static get styles () {
    return css`
      .tabs-container {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .tab-bar {
        position: absolute;
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: white;
        z-index: 1;
      }
      .tab-bar a {
        position: relative;
        text-align: center;
        margin: 1.5rem;
        width: 128px;
        cursor: pointer;
      }
      .tab-bar a:not(.selected) .text {
        opacity: 0.5;
      }
      .tab-view {
        position: relative;
        padding-top: 96px;
        width: 200%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        overflow: hidden;
        transition: transform 0.4s;
      }
      .tab-indicator {
        position: absolute;
        bottom: -1rem;
        left: 0px;
        width: 128px;
        height: 4px;
        background: white;
        border-radius: 2px;
        transition: transform 0.4s;
      }
    `;
  }

  render () {
    return html`
      <div class="tabs-container">
        <nav class="tab-bar">
          <a class="allies ${this.selected === 0 ? 'selected' : ''}" @click=${() => {this.selected = 0}}><span class="text">For Allies</span>
            <span class="tab-indicator" style="${this.selected === 1 ? 'transform: translate(calc(100% + 3rem))' : ''}"></span>
          </a>
          <a class="lgbt ${this.selected === 1 ? 'selected' : ''}" @click=${() => {this.selected = 1}}><span class="text">For LGBTQ+</span></a>
        </nav>
        <div class="tab-view" style="transform: translate(-${50 * this.selected}%)">
          <slot name="allies"></slot>
          <slot name="lgbt"></slot>
        </div>
      </div>
    `;
  }

}

customElements.define('resources-tabs', ResourcesTabs);