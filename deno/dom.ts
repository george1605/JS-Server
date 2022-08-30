class HtmlNode {
   public children: HtmlNode[];
   public innerHTML: string;
   public appendChild(child: HtmlNode): void {
     this.innerHTML += child.innerHTML;
     this.children.push(child);
   }
}

class Document {
   public HTML: string;
   public Body: HtmlNode;
}
