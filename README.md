# Web-Components

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

# Concepts

- Custom elements: A set of JavaScript APIs that allow you to define custom elements and their behaviour, which can then be used as desired in your user interface.

- Shadow DOM: A set of JavaScript APIs for attaching an encapsulated "shadow" DOM tree to an element — which is rendered separately from the main document DOM — and controlling associated functionality. In this way, you can keep an element's features private, so they can be scripted and styled without the fear of collision with other parts of the document.

- HTML templates: The <template> and <slot> elements enable you to write markup templates that are not displayed in the rendered page. These can then be reused multiple times as the basis of a custom element's structure.
  
# LifeCycle

- connectedCallback: Invoked when the custom element is first connected to the document's DOM.
- disconnectedCallback: Invoked when the custom element is disconnected from the document's DOM.
- adoptedCallback: Invoked when the custom element is moved to a new document.
- attributeChangedCallback: Invoked when one of the custom element's attributes is added, removed, or changed.

# Video
[![WebComponents](http://img.youtube.com/vi/YBwgkr_Sbx0/0.jpg)](http://www.youtube.com/watch?v=YBwgkr_Sbx0 "WebComponents")

# Documentation
[WebComponents](https://developers.google.com/web/fundamentals/web-components)

# EventBus
An event bus implements the publisher/subscriber pattern. It can be used to decouple the components of an application so that a component can react to events fired from another component without them having direct dependencies with each other. They only need to know the event bus.
