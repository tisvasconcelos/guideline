function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

var examples = Array.prototype.slice.call(document.querySelectorAll('.example'));
examples.forEach(example => {
  code = example.nextElementSibling;
  if(code) {
    var html = escapeHtml(example.innerHTML);
    code.querySelector('code').innerHTML = html;
  }
});
