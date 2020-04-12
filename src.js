var els = document.querySelectorAll("*");
var cnt = els.length;
var colors = {
    "HTML": 'Gainsboro',
    "HEAD": 'FloralWhite',
    "BODY" : 'ForestGreen',
    "DIV": 'Fuchsia',
    "HEADER": 'Gainsboro',
    "H1": 'GhostWhite',
    "A": 'Gold',
    "MAIN":  'GoldenRod',
    "SECTION": 'Gray',
    "H2": 'GreenYellow',
    "P": 'HotPink',
    "SPAN": 'IndianRed',
    "H3" : 'yellow',
    "FOOTER": 'Khaki',
    "UL": 'Lavender',
    "LI": 'LawnGreen',
    "IMG": 'LemonChiffon'
};
var excluded = ['HEAD', 'META', 'TITLE', 'LINK'];
for (let i=0; i < cnt; i++) {
    var el = els[i];
    var css =  getComputedStyle(el);
    var span = document.createElement("pre");
    el.style.border = "1px red solid";
    var w = css.width.split('.')[0];
    var h = css.height.split('.')[0];
    var t = el.tagName;
    span.innerHTML = '&lt;' + t + '&gt;' + w + ' ' + h;
    if(excluded.indexOf(t) > -1){continue;}
    span.style.position = css.position === 'relative' ? 'absolute' : 'static';
    span.style.top = '0';
    span.style.backgroundColor = colors[t] ||  'orange';
    span.style.textAlign = 'left';
    span.style.color = 'black';
    span.style.height = '20px';
    span.style.lineHeight = '20px';
    span.style.fontSize = '13px';
    span.style.fontWeight = 'normal';
    span.style.opacity = '0.75';
    span.style.margin = 0;
    span.style.padding = 0;
    el.insertBefore(span, el.lastChild);
}
