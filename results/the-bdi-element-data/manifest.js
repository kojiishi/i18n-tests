var tests = {
	'the-bdi-element-080.html': [
	'The dir attribute: bdi has dir=auto by default',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'The dir global attribute defaults to auto on this element (it never inherits from the parent element like with other elements).',
	],
	'the-bdi-element-081.html': [
	'The dir attribute: BDI: neutral to following number',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-082.html': [
	'The dir attribute: BDI: neutral when BR',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.      Thus, a BDI containing a BR (which serves as a paragraph break in the content of the BDI)       must not serve as a paragraph break in the content around the BDI.',
	],
	'the-bdi-element-083.html': [
	'The dir attribute: BDI: neutral when contains LRO or RLO without PDF',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level container that a bdi element finds itself within, the bdi element must be treated like a U+FFFC OBJECT REPLACEMENT CHARACTER. Thus, if a BDI contains LRO or RLO characters lacking a matching PDF, these must not affect the visual ordering of the content outside the BDI.',
	],
	'the-bdi-element-084.html': [
	'The dir attribute: BDI: neutral when nested',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER. This must apply when a BDI is nested within a BDI.',
	],
	'the-bdi-element-085.html': [
	'The dir attribute: BDI: neutral when number',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-086.html': [
	'The dir attribute: BDI: paragraph-level container',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.       Thus, under no circumstances should any part of the content outside a BDI be visually       reordered inside the BDIs content.',
	],
	'the-bdi-element-087.html': [
	'The dir attribute: BDI: neutral to following letter',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-088.html': [
	'The dir attribute: BDI: neutral to immediately following letter',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-089.html': [
	'The dir attribute: BDI: neutral to preceding letter',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-090.html': [
	'The dir attribute: BDI: neutral to immediately preceding letter',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-091.html': [
	'The dir attribute: BDI: neutral to immediately following number',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.',
	],
	'the-bdi-element-092.html': [
	'The dir attribute: BDI: neutral to surrounding letters',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.       Thus, regardless of its content and its dir attribute (if any), a BDI will not prevent       a strongly RTL (or LTR) character preceding it from forming a single directional run with       another strongly RTL (LTR) character following it.',
	],
	'the-bdi-element-093.html': [
	'The dir attribute: BDI: neutral when wrapped',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.     Obviously, this should hold even if the BDIs content is wrapped over more than one line.       A single character (U+FFFC or otherwise) obviously never gets wrapped over more than one       line, but we still expect the part of the content preceding the BDI, if any, that is       displayed on the same line as some part of the BDI to be ordered the same as it would be       if that part of the BDI were replaced with U+FFFC. Similarly, we expect the part of the       content following the BDI, if any, that is displayed on the same line as some part of the       BDI to be ordered the same as it would be if that part of the BDI were replaced with U+FFFC.',
	],
	'the-bdi-element-094.html': [
	'The dir attribute: BDI: paragraph-level container',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the contents of a bdi element,       user agents must treat the element as a paragraph-level container.       Thus, under no circumstances should the content outside a BDI affect the visual       ordering of the BDIs content.',
	],
	'the-bdi-element-095.html': [
	'The dir attribute: BDI: neutral to another BDI',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.       Thus, when a BDIs contains text of the same strong direction as another BDI following it, the       two must not form a directional run as would be the case if the BDIs were just SPANs.',
	],
	'the-bdi-element-096.html': [
	'The dir attribute: BDI: neutral to another immediately following BDI',
	'http://www.w3.org/TR/html5/dom.html#the-dir-attribute',
	'For the purposes of applying the bidirectional algorithm to the paragraph-level       container that a bdi element finds itself within, the bdi element must be treated       like a U+FFFC OBJECT REPLACEMENT CHARACTER.      Thus, when a BDIs contains text of the same strong direction as another BDI following it, the       two must not form a directional run as would be the case if the BDIs were just SPANs, even if       the two BDIs are not separated by anything at all.',
	],
}
