import * as AD from "../../abstract-document/index";
import {SectionElement} from "../section-elements/section-element";
import {parse} from "markdown-to-ast";
import {AstElements, MarkDownProcessData} from "./types";

export interface MarkdownProps {
  text: string,
}

function preProcessMarkdownAst(ast: AstElements, styles: Array<string>, atoms: Array<AD.Atom.Atom>, paragraphs: Array<AD.Paragraph.Paragraph>, d: number): MarkDownProcessData {
  if (ast.type === "Str") { return {atoms, paragraphs}; } // Need to convice TS that we never go below this line with a Str element.

  ast.children.forEach((child) => {
    let style = styles.slice(); // create a new copy of styles
    switch (ast.type) {
      case "Header":
        style.push("H" + ast.depth);
        break;
      case "Emphasis":
        style.push("Emphasis");
        break;
      case "Strong":
        style.push("Strong");
        break;
      default:
        break;
    }

    // Recurse down the rabbit hole until we find a Str.
    ({atoms, paragraphs} = preProcessMarkdownAst(child, style, atoms, paragraphs, d+1));
    // After child, check if we should create a new paragraph.
    if (child.type === "Paragraph" || child.type === "Header") {
      const paragraphStyle = child.type === "Header" ? "H" + child.depth : undefined;

      paragraphs.push(AD.Paragraph.create({
        styleName: paragraphStyle,
        children: atoms,
        numbering: undefined,    //paragraph.numbering
      }));
      atoms = []; // Flush the Atoms-array for the next paragraph.
    } else if (child.type === "Str") {
      atoms = atoms.concat(child.value.split("\n").map((v: string) => ({ type: 'TextRun', text: v, styleName: style[style.length -1], textProperties: {} } as AD.TextRun.TextRun)));
    }
  });

  return {atoms, paragraphs};
}

export function create({text}: MarkdownProps): Array<SectionElement> {
  const ast = parse(text);
  return preProcessMarkdownAst(ast, [], [], [], 0).paragraphs;
}
