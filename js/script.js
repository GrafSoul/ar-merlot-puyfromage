window.addEventListener("load", () => {
  const myImageGroup = document.getElementById("image-group");
  const model = myImageGroup.querySelector("[gltf-model]");
  let imageVisible = false;

  myImageGroup.addEventListener("zappar-visible", () => {
    // The image has appeared so show the group
    myImageGroup.setAttribute("visible", "true");
    imageVisible = true;
    // Play sound when image is visible
    document.querySelector("#sound-entity").components.sound.playSound();
  });

  myImageGroup.addEventListener("zappar-notvisible", () => {
    // The image has disappeared so hide the group after a short delay

    imageVisible = false;

    if (imageVisible === false) {
      myImageGroup.setAttribute("visible", "false");
      // Stop sound when image is not visible
      document.querySelector("#sound-entity").components.sound.stopSound();
    }
  });
});
