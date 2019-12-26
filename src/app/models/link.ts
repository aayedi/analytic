export class Link {
  href: string;
  label: string;
  linkClass: string;

  constructor(href: string, label: string, linkClass: string) {
    this.href = href;
    this.label = label;
    this.linkClass = linkClass;
  }
}
