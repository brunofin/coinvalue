'use strict';

describe('D-Guard Web', function() {
    
    it('dg-frame must be 900px wide and 542px high', function() {
	browser.get('/');
	
	var dgFrame = element.all(by.tagName('dg-frame')).first();
	
	
	dgFrame.getSize().then(function(size) {
	    
	    expect(size.height).toBe(542);
	    expect(size.width).toBe(900);
	});
    });
    
    describe('Connections screen', function() {
	
	beforeEach(function() {
	    browser.get('/');
	});
	
	it('should display the appname correctly', function() {
	    var appname = element(by.tagName('dg-frame')).all(by.className('appNamePlaceholder')).first();
	    
	    appname.getText().then(function(text) {
		expect(text).toBe('Conexões');
	    })
	})
	
	it('should show add servers menu when clicking on "New" button', function() {
	    var buttonCircle = element.all(by.id('conexoes-add-server-button')).first();
	    
	    buttonCircle.click().then(function() {
		browser.driver.sleep(1000);
		
		var frame = element.all(by.tagName('dg-conexoes-add-server')).first();
		
		frame.getTagName().then(function(name) {
		    expect(name).toBe('dg-conexoes-add-server');
		});
	    });
	});
	
	it('should show add servers menu when clicking on "New" text', function() {
	    var buttonText = element.all(by.id('conexoes-add-server-textbutton')).first();
	    
	    buttonText.click().then(function() {
		browser.driver.sleep(1000);
		
		var frame = element.all(by.tagName('dg-conexoes-add-server')).first();
		
		frame.getTagName().then(function(name) {
		    expect(name).toBe('dg-conexoes-add-server');
		});
	    });
	});
	
	it('should show add servers menu when clicking on "Servers" button', function() {
	    var buttonCircle = element.all(by.id('conexoes-view-servers-button')).first();
	    
	    buttonCircle.click().then(function() {
		browser.driver.sleep(1000);
		
		var frame = element.all(by.tagName('dg-conexoes-view-servers')).first();
		
		frame.getTagName().then(function(name) {
		    expect(name).toBe('dg-conexoes-view-servers');
		});
	    });
	});
	
	it('should show add servers menu when clicking on "Servers" text', function() {
	    var buttonText = element.all(by.id('conexoes-view-servers-textbutton')).first();
	    
	    buttonText.click().then(function() {
		browser.driver.sleep(1000);
		
		var frame = element.all(by.tagName('dg-conexoes-view-servers')).first();
		
		frame.getTagName().then(function(name) {
		    expect(name).toBe('dg-conexoes-view-servers');
		});
	    });
	});
	
	it('should return to first screen when button "back" is clicked', function() {
	    var toAdd = element.all(by.id('conexoes-add-server-button')).first();
	    
	    toAdd.click().then(function() {
		browser.driver.sleep(1000);
		
		var back = element.all(by.id('Conexões-Voltar')).first();
		
		back.click().then(function() {
		    var frame = element.all(by.id('conexaoStart')).first();
		    expect(frame.isPresent()).toBe(true);
		});
	    });
	    
	    browser.get('http://admin:seventh@localhost:8081/');
	    var toView = element.all(by.id('conexoes-view-servers-button')).first();
	    
	    toView.click().then(function() {
		browser.driver.sleep(1000);
		
		var back = element.all(by.id('Conexões-Voltar')).first();
		
		back.click().then(function() {
		    var frame = element.all(by.id('conexaoStart')).first();
		    expect(frame.isPresent()).toBe(true);
		});
	    });
	});
    
    });
    


//  describe('Phone list view', function() {
//
//    beforeEach(function() {
//      browser.get('app/index.html#/phones');
//    });
//
//
//    it('should filter the phone list as a user types into the search box', function() {
//
//      var phoneList = element.all(by.repeater('phone in phones'));
//      var query = element(by.model('query'));
//
//      expect(phoneList.count()).toBe(20);
//
//      query.sendKeys('nexus');
//      expect(phoneList.count()).toBe(1);
//
//      query.clear();
//      query.sendKeys('motorola');
//      expect(phoneList.count()).toBe(8);
//    });
//
//
//    it('should be possible to control phone order via the drop down select box', function() {
//
//      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
//      var query = element(by.model('query'));
//
//      function getNames() {
//        return phoneNameColumn.map(function(elm) {
//          return elm.getText();
//        });
//      }
//
//      query.sendKeys('tablet'); //let's narrow the dataset to make the test assertions shorter
//
//      expect(getNames()).toEqual([
//        "Motorola XOOM\u2122 with Wi-Fi",
//        "MOTOROLA XOOM\u2122"
//      ]);
//
//      element(by.model('orderProp')).element(by.css('option[value="name"]')).click();
//
//      expect(getNames()).toEqual([
//        "MOTOROLA XOOM\u2122",
//        "Motorola XOOM\u2122 with Wi-Fi"
//      ]);
//    });
//
//
//    it('should render phone specific links', function() {
//      var query = element(by.model('query'));
//      query.sendKeys('nexus');
//      element.all(by.css('.phones li a')).first().click();
//      browser.getLocationAbsUrl().then(function(url) {
//        expect(url).toEqual('/phones/nexus-s');
//      });
//    });
//  });
//
//
//  describe('Phone detail view', function() {
//
//    beforeEach(function() {
//      browser.get('app/index.html#/phones/nexus-s');
//    });
//
//
//    it('should display nexus-s page', function() {
//      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
//    });
//
//
//    it('should display the first phone image as the main phone image', function() {
//      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
//    });
//
//
//    it('should swap main image if a thumbnail image is clicked on', function() {
//      element(by.css('.phone-thumbs li:nth-child(3) img')).click();
//      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.2.jpg/);
//
//      element(by.css('.phone-thumbs li:nth-child(1) img')).click();
//      expect(element(by.css('img.phone.active')).getAttribute('src')).toMatch(/img\/phones\/nexus-s.0.jpg/);
//    });
//  });
});