// from https://www.tyleo.com/html-glass.html#final-recipe-lookahead

/**
 * Iterates through all `HTMLElement`s with
 * `data-js-background-attachment-fixed` and updates the `background-position`
 * to simulate `background-attachment: fixed`.
 */
const updateDataJSBackgroundAttachmentFixedElements = () => {
  // Find all elements with the `data-js-background-attachment-fixed` attribute
  const elements = document.querySelectorAll(
    "[data-js-background-attachment-fixed]",
  );

  for (const element of elements) {
    // Only consider `HTMLElement`s
    if (!(element instanceof HTMLElement)) continue;

    // Find the position of the element
    const clientRect = element.getBoundingClientRect();

    // Move the background position opposite the position in the viewport
    const backgroundPositionX = `${(-clientRect.x).toString()}px`;
    const backgroundPositionY = `${(-clientRect.y).toString()}px`;

    element.style.backgroundPositionX = backgroundPositionX;
    element.style.backgroundPositionY = backgroundPositionY;
  }
};

/**
 * Begins a loop which simulates `background-attachment: fixed` for
 * `HTMLElement`s with `data-js-background-attachment-fixed`.
 *
 * This loop executes each animation frame.
 */
const initDataJSBackgroundAttachmentFixed = () => {
  requestAnimationFrame(() => {
    updateDataJSBackgroundAttachmentFixedElements();
    initDataJSBackgroundAttachmentFixed();
  });
};

initDataJSBackgroundAttachmentFixed();