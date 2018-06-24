import { PolymerElement, html } from "@polymer/polymer/polymer-element.js";
import "@polymer/polymer/lib/elements/dom-if.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/app-layout/app-header-layout/app-header-layout.js";
import "@polymer/app-layout/app-scroll-effects/app-scroll-effects.js";
import "@polymer/app-layout/app-header/app-header.js";
import "@polymer/app-layout/app-toolbar/app-toolbar.js";
import "@polymer/iron-form/iron-form.js";
import { setPassiveTouchGestures } from "@polymer/polymer/lib/utils/settings";

class EventPage extends PolymerElement {
  constructor() {
    super();
  }

  scrollIntoView(e) {
    let sectionId = e.target.getAttribute("section-id");
    this.$[sectionId].scrollIntoView();
  }

  static get template() {
    return html`
      <style>
        paper-button.green {
          background-color: green;
          color: white;
        }

        a {
          text-decoration: none;
          font-size: inherit;
          color: inherit;
        }

        .tabs {
          height: 100%;
          @apply --layout-horizontal;
        }
        .tabs > a {
          @apply --layout-vertical;
          @apply --layout-center-center;
          margin: 12px 16px 12px;
        }

        header {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: calc(100vh - 64px);
          padding: 0 16px;
          background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2017/09/forest-07.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
          text-align: center;
        }

        header > h2 {
          font-size: 56px;
          font-weight: 300;
          margin: 0;
        }

        header > div {
          background-color: black;
        }

        section {
          padding: 88px 16px;
        }
        .container {
          @apply --layout-horizontal;
          max-width: 800px;
          margin: 0 auto;
        }
        .container > * {
          @apply --layout-flex;
        }
        .container img {
          max-width: 100%;
          max-height: 100%;
        }
        .container h3 {
          font-size: 32px;
          font-weight: 300;
          margin: 24px 0;
        }
        .container p {
          line-height: 1.5;
        }

        iron-form paper-button {
          width: 20%;
        }

        button {
          background-color: Transparent;
          background-repeat:no-repeat;
          border: none;
          cursor:pointer;
          overflow: hidden;
          outline:none;
          width: 100%;
      }

      </style>

      <app-header reveals>
        <app-toolbar>
        <div class="tabs">
          <a on-click="scrollIntoView" section-id="about">About</a>
          <a on-click="scrollIntoView" section-id="register">Register</a>
        </div>
        </app-toolbar>
      </app-header>

      <header>
        <h2>Welcome To The Ecology Festival</h2>
        <p>Moscow</p>
        <p>1 - 7 July 2018</p>
      </header>

      <section id="about">
        <div class="container">
          <div>
            <h3>About</h3>
            <p>The Ecology Festival is an international event focusing on the fields of ecology, art, science and technology and targeting at sustainable urbanistic development.</p>
            <p>The festival's goal is to reconcile ecology and progress by creating a shared platform for artists, scientists, the industry and creative thinkers from all over the world. The event lasts one week and centers around the work of international environmental researchers - an artistic movement addressing ecological issues by operating at the interface between science, technology and nature.</p>
            <p>The project started as an initiative of Pluto Company, an agency for ecology program sponsorship, specialized in the fields of sustainability and ecology. The Ecology Festival is now governed by the eponymous non-profit organization based in Russia.</p>
          </div>
        </div>
      </section>

      <section id="register">
        <div class="container">
          <div>
            <h3>Register</h3>
            <iron-form>
              <form method="post" action="https://httpbin.org/post" enctype="multipart/form-data">
                <paper-input type="text" label="Your Name" required name="name" placeholder="Your Name" title="Your Name"></paper-input>
                <paper-input type="e-mail" label="E-mail" required auto-validate pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" error-message="Wrong e-mail" name="e-mail" placeholder="E-mail"></paper-input>
                <paper-input type="password" label="Password" required auto-validate pattern=".{6,}" error-message="Must be more than 6 symbols" name="password" placeholder="Password"></paper-input>
                
                <button type="submit"><paper-button raised class="green">Register</paper-button></button>
              </form>
          </iron-form>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("event-page", EventPage);
