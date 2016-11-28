/**
	Utilities for generate lorem ipsum text.
	Inspired from CASA Lib / AS 2.0 (v.10/06/08) 
	Copyright (c) 2008, Aaron Clinger & Contributors of CASA Lib
	
	@author Adrien Dufond - manmaru, Inc.
	@src https://github.com/adrien-dufond/manmaru
	@version 0.1
	@since 28/11/2016
	
	Distributed under the terms of the MIT license.
	http://www.opensource.org/licenses/mit-license.html
*/

LoremIpsum = (function() {
	
	function LoremIpsum() {}
   
 	var words = new Array('lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetuer', 'adipiscing', 'elit', 'nam', 'imperdiet', 'dignissim', 'erat', 'mauris', 'ut', 'pellentesque', 'habitant', 'morbi', 'tristique', 'senectus', 'et', 'netus', 'malesuada', 'fames', 'ac', 'turpis', 'egestas', 'phasellus', 'sem', 'metus', 'lacinia', 'facilisis', 'at', 'sagittis', 'vel', 'felis', 'aenean', 'bibendum', 'in', 'enim', 'nulla', 'sed', 'ante', 'scelerisque', 'aliquet', 'facilisi', 'aliquam', 'velit', 'vitae', 'tellus', 'massa', 'etiam', 'hendrerit', 'rutrum', 'orci', 'nibh', 'fringilla', 'posuere', 'mi', 'praesent', 'interdum', 'risus', 'arcu', 'donec', 'auctor', 'dui', 'tempus', 'nec', 'id', 'laoreet', 'blandit', 'ligula', 'eu', 'dapibus', 'tincidunt', 'nunc', 'lectus', 'integer', 'curabitur', 'a', 'ultricies', 'quis', 'suscipit', 'eleifend', 'augue', 'congue', 'eros', 'non', 'sapien', 'neque', 'vestibulum', 'nonummy', 'leo', 'ornare', 'vehicula', 'eget', 'tempor', 'magna', 'suspendisse', 'placerat', 'mattis', 'luctus', 'lacus', 'duis', 'venenatis', 'porta', 'urna', 'vivamus', 'nisl', 'proin', 'sollicitudin', 'pulvinar', 'quam', 'maecenas', 'lobortis', 'pharetra', 'purus', 'pretium', 'mollis', 'cum', 'sociis', 'natoque', 'penatibus', 'magnis', 'dis', 'parturient', 'montes', 'nascetur', 'ridiculus', 'mus', 'fusce', 'est', 'ultrices', 'feugiat', 'iaculis', 'nisi', 'sodales', 'vulputate', 'tortor', 'accumsan', 'commodo', 'faucibus', 'justo', 'volutpat', 'porttitor', 'gravida', 'nullam', 'molestie', 'condimentum', 'euismod', 'elementum', 'odio');
    
    /**
        Creates a defined amount of placeholder words.
        
        @amount The amount of words.
        @return Returns a string comprised of randomized dummy text.
    */
    LoremIpsum.generateWords = function(amount) {
        var l = words.length,
        	r = LoremIpsum.toTitleCase(words[LoremIpsum.randomInteger(0, l)]);
        
        amount--;
        
        while (amount--)
            r += ' ' + words[LoremIpsum.randomInteger(0, l)];
        
        return r;
    }
    
    /**
        Creates a defined amount of placeholder sentences. Sentence length varies between four and ten words.
        
        @amount The amount of sentences.
        @return Returns a string comprised of randomized dummy text.
    */
    LoremIpsum.generateSentences = function(amount) {
        var r = '';
        
        while (amount--)
            r += LoremIpsum.generateWords(LoremIpsum.randomInteger(4, 10)) + '. ';
        
        return r.slice(0, -1);
    }

    
    /**
        Creates a defined amount of placeholder paragraphs. Paragraph length varies between four and fifteen sentences.
        
        @amount The amount of paragraphs.
        @return Returns a string comprised of randomized dummy text.
    */
    LoremIpsum.generateParagraphs = function(amount) {
        var t = '';
        
        while (amount--)
            t += LoremIpsum.generateSentences(LoremIpsum.randomInteger(4, 15)) + '\r\r';
        
        return t;
    }

    LoremIpsum.randomInteger = function(min, max) {
        return min + Math.floor(Math.random() * (max + 1 - min));
    }
    LoremIpsum.replaceAt = function(source, position, replace) {
		var parts = source.split('');
		parts.splice(position, 1, replace);
		return parts.join('');
	}

    LoremIpsum.toTitleCase = function(source) {
		var w = source.split(' '),
			i = -1;
		while (++i < w.length)
			w[i] = LoremIpsum.replaceAt(w[i], 0, w[i].charAt(0).toUpperCase());
		return w.join(' ');
	}
		
    return LoremIpsum;
    
})();
