import { html as beautifyImpl } from 'js-beautify'

const jsBeautifyOptions = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 1,
  preserve_newlines: true,
  keep_array_indentation: false,
  break_chained_methods: false,
  indent_scripts: 'keep' as const,
  brace_style: 'collapse' as const,
  space_before_conditional: true,
  unescape_strings: false,
  jslint_happy: false,
  end_with_newline: false,
  wrap_line_length: 80,
  indent_inner_html: false,
  comma_first: false,
  e4x: false,
  indent_empty_lines: false,
}

export default function beautifyHTML(html: string) {
  return beautifyImpl(html, jsBeautifyOptions)
}
