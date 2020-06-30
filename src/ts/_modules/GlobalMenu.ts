//@ts-ignore
import anime from 'animejs/lib/anime.es.js';

export default class GlobalMenu {
  private btn: HTMLElement | null;
  private body: HTMLElement | null;
  private bg: HTMLElement | null;
  private is_opened = false;
  private is_changing = false;
  private openClass = '-opened';

  public constructor(
    btnId: string,
    bodyId: string,
    bgId: string,
    openClass?: string
  ) {
    this.btn = document.getElementById(btnId);
    this.body = document.getElementById(bodyId);
    this.bg = document.getElementById(bgId);
    if (openClass) {
      this.openClass = openClass;
    }
    if (this.btn) {
      this.btn.addEventListener('click', () => {
        this.click();
      });
    }
    if (this.bg) {
      this.bg.addEventListener('click', () => {
        this.close();
      });
    }
    document.addEventListener('keyup', (event) => {
      if (event.keyCode === 27 && this.is_opened) {
        this.close();
      }
    });
  }

  private open(): void {
    this.is_opened = true;
    this.is_changing = true;
    if (this.btn) this.btn.classList.add(this.openClass);
    if (this.body) {
      this.body.classList.add(this.openClass);
      anime({
        targets: this.body,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 300,
        complete: () => {
          this.is_changing = false;
        },
      });
    }
  }

  private close(): void {
    if (this.btn) this.btn.classList.remove(this.openClass);
    this.is_opened = false;
    this.is_changing = true;

    anime({
      targets: this.body,
      opacity: [1, 0],
      easing: 'easeInOutQuad',
      duration: 300,
      complete: () => {
        this.is_changing = false;
        if (this.body) this.body.classList.remove(this.openClass);
      },
    });
  }

  private click(): void {
    if (this.is_changing) return;
    if (this.is_opened) {
      this.close();
    } else {
      this.open();
    }
  }
}
