// Converted from https://github.com/framework7io/framework7-cli/blob/master/create/templates/common/capacitor-app.js
import { App } from "@capacitor/app";
import { Keyboard, KeyboardResize } from "@capacitor/keyboard";
import { f7 } from "framework7-react";
import { Dom7 as $ } from "framework7";

/**
 * This method prevents back button tap to exit from app on android.
 * In case there is an opened modal it will close that modal instead.
 * In case there is a current view with navigation history, it will go back instead.
 * Else, it will exit the app.
 */
function handleAndroidBackButton() {
  App.addListener("backButton", () => {
    const currentView = f7.views.current;
    if ($(".actions-modal.modal-in").length) {
      f7.actions.close(".actions-modal.modal-in");
    } else if ($(".dialog.modal-in").length) {
      f7.dialog.close(".dialog.modal-in");
    } else if ($(".sheet-modal.modal-in").length) {
      f7.sheet.close(".sheet-modal.modal-in");
    } else if ($(".popover.modal-in").length) {
      f7.popover.close(".popover.modal-in");
    } else if ($(".popup.modal-in").length) {
      const currentView = f7.views.get(".popup.modal-in>.view");
      if (
        $(".popup.modal-in>.view").length &&
        currentView.router.history.length > 1
      ) {
        currentView.router.back();
      } else {
        f7.popup.close(".popup.modal-in");
      }
    } else if ($(".login-screen.modal-in").length) {
      f7.loginScreen.close(".login-screen.modal-in");
    } else if ($(".page-current .searchbar-enabled").length) {
      f7.searchbar.disable(".page-current .searchbar-enabled");
    } else if ($(".page-current .card-expandable.card-opened").length) {
      f7.card.close(".page-current .card-expandable.card-opened");
    } else if (currentView.router.history.length > 1) {
      currentView.router.back();
    } else if ($(".panel.panel-in").length) {
      f7.panel.close(".panel.panel-in");
    } else {
      App.exitApp();
    }
  });
}

/**
 * This method does the following:
 *   - provides cross-platform view "shrinking" on keyboard open/close
 *   - hides keyboard accessory bar for all inputs except where it required
 */
function handleKeyboard() {
  Keyboard.setResizeMode({ mode: KeyboardResize.Native });
  Keyboard.setScroll({ isDisabled: true });
  Keyboard.setAccessoryBarVisible({ isVisible: false });

  const scrollIntoView = () => {
    if (document.activeElement instanceof HTMLElement) {
      f7.input.scrollIntoView(document.activeElement, 0, true, true);
    }
  };
  window.addEventListener("keyboardWillShow", scrollIntoView);
  window.addEventListener("keyboardDidShow", scrollIntoView);
  window.addEventListener("keyboardDidHide", () => {
    if (
      document.activeElement &&
      $(document.activeElement).parents(".messagebar").length
    ) {
      return;
    }
    Keyboard.setAccessoryBarVisible({ isVisible: true });
  });

  $(document).on(
    "touchstart",
    "input, textarea, select",
    (e) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const nodeName = e.target.nodeName.toLowerCase();
      const type = e.target.type;
      const showForTypes = ["datetime-local", "time", "date", "datetime"];
      if (nodeName === "select" || showForTypes.indexOf(type) >= 0) {
        Keyboard.setAccessoryBarVisible({ isVisible: true });
      } else {
        Keyboard.setAccessoryBarVisible({ isVisible: false });
      }
    },
    true
  );
}

const capacitorInit = () => {
  handleAndroidBackButton();
  handleKeyboard();
};

export default capacitorInit;
