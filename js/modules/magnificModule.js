export default function magnificModule() {
  $(".link-video").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true,
    overflowY: "hidden",
  });
}
