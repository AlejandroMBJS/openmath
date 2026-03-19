function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderInline(content) {
  return `<span v-pre class="math math-inline">\\(${escapeHtml(content)}\\)</span>`;
}

function renderBlock(content) {
  return `<div v-pre class="math math-display">\\[${escapeHtml(content)}\\]</div>\n`;
}

function mathInlineDollar(state, silent) {
  const start = state.pos;
  if (state.src[start] !== "$" || state.src[start + 1] === "$") return false;

  let pos = start + 1;
  while (pos < state.posMax) {
    if (state.src[pos] === "$" && state.src[pos - 1] !== "\\") break;
    pos += 1;
  }
  if (pos >= state.posMax || pos === start + 1) return false;

  if (!silent) {
    const token = state.push("math_inline", "math", 0);
    token.content = state.src.slice(start + 1, pos);
  }

  state.pos = pos + 1;
  return true;
}

function mathInlineParen(state, silent) {
  const start = state.pos;
  if (state.src.slice(start, start + 2) !== "\\(") return false;

  const end = state.src.indexOf("\\)", start + 2);
  if (end === -1) return false;

  if (!silent) {
    const token = state.push("math_inline", "math", 0);
    token.content = state.src.slice(start + 2, end);
  }

  state.pos = end + 2;
  return true;
}

function mathBlock(state, startLine, endLine, silent) {
  let pos = state.bMarks[startLine] + state.tShift[startLine];
  let max = state.eMarks[startLine];
  const firstLine = state.src.slice(pos, max).trim();

  let closingLine;
  if (firstLine === "$$") {
    closingLine = "$$";
  } else if (firstLine === "\\[") {
    closingLine = "\\]";
  } else {
    return false;
  }

  let nextLine = startLine + 1;
  while (nextLine < endLine) {
    pos = state.bMarks[nextLine] + state.tShift[nextLine];
    max = state.eMarks[nextLine];
    if (state.src.slice(pos, max).trim() === closingLine) {
      if (silent) return true;
      const token = state.push("math_block", "math", 0);
      token.block = true;
      token.content = state.getLines(startLine + 1, nextLine, state.tShift[startLine], true).trimEnd();
      token.map = [startLine, nextLine + 1];
      state.line = nextLine + 1;
      return true;
    }
    nextLine += 1;
  }

  return false;
}

export default function clientMathPlugin(md) {
  md.inline.ruler.before("escape", "math_inline_dollar", mathInlineDollar);
  md.inline.ruler.before("escape", "math_inline_paren", mathInlineParen);
  md.block.ruler.before("fence", "math_block", mathBlock);
  md.renderer.rules.math_inline = (tokens, idx) => renderInline(tokens[idx].content);
  md.renderer.rules.math_block = (tokens, idx) => renderBlock(tokens[idx].content);
}
