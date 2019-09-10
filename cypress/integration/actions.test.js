describe('Visual Regression Testing', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Buefy',
            testName: 'Visual Regression Tests',
            apiKey: 'i7KNzc5SWdw5bseLH0o0zGWFbNNvKrZKyMfWYQZli5A110',
            browser: [{
                    name: 'chrome',
                    width: 1200,
                    height: 800
                },
                {
                    name: 'firefox',
                    width: 1200,
                    height: 800
                }
            ]
        });
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it('Documentation should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation home page');
    });

    it('...documentation/start should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/start`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation home page');
    });

    it('...documentation/customization should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/customization`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation customization options');
    });

    it('...documentation/constructor-options should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/constructor-options`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation constructor options');
    });

    it('...documentation/layout should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/layout`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation layout');
    });

    it('...documentation/button should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/button`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation button');

        // Click "click me" button
        cy.get('div.example-component:first button')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Expected result after button click');

        // Click invert outlined
        cy.get('.notification.is-primary button')
            .eq(1)
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.example-component:nth-child(2)' //CSS Selector
        });
    });

    it('...documentation/collapse should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/collapse`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation collapse');

        // Click "click me" button
        cy.get('div.example-component:first button')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.notification' //CSS Selector
        });

        // Click "toggle" button
        cy.get('.button.is-medium.is-primary')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.collapse.panel' //CSS Selector
        });
    });

    it('...documentation/dialog should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/dialog`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation dialog');

        // Click "launch alert (default)" button
        cy.get('div.example-component:first button:first')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.modal-card.animation-content' //CSS Selector
        });
        cy.get('div.modal-card .button')
            .click();

        // Click "launch alert (custom)" button
        cy.get('div.example-component:first button:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.modal-card' //CSS Selector
        });
        cy.get('div.modal-card .button')
            .click();
        // Wait for 1 second
        cy.wait(100)

        // Click "launch alert (custom)" 2nd button
        cy.get('div.example-component:first button:nth-child(3)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'div.modal-card' //CSS Selector
        });
        cy.get('div.modal-card .button')
            .click();
    });

    it('...documentation/dropdown should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/dropdown`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation dropdown');

        // // Click "custom trigger" button
        // cy.get('p.tag')
        //     .click();
        // // Screenshot affected elements
        // cy.eyesCheckWindow({
        //     sizeMode: 'selector', //mode
        //     selector: 'div.dropdown-menu:nth-child(3)'
        // });

        // // Click menu button
        // cy.get('div.example-component:nth-child(2) button')
        //     .click();
        // // Screenshot affected elements
        // cy.eyesCheckWindow({
        //     sizeMode: 'selector', //mode
        //     selector: 'div.example-component:nth-child(2) > div.dropdown-content'
        // });

        // // Click next menu button
        // cy.get('div.example-component:nth-child(3) button')
        //     .click();
        // // Screenshot affected elements
        // cy.eyesCheckWindow({
        //     sizeMode: 'selector', //mode
        //     selector: 'div.example-component:nth-child(3) > div.dropdown-content'
        // });

        // // Click "public" button
        // cy.get('div.example-component:nth-child(4) button')
        //     .click();
        // // Screenshot affected elements
        // cy.eyesCheckWindow({
        //     sizeMode: 'selector', //mode
        //     selector: 'div.example-component:nth-child(4) > div.dropdown-content'
        // });

        // // Click "selected" button
        // cy.get('div.example-component:nth-child(5) button')
        //     .click();
        // // Screenshot affected elements
        // cy.eyesCheckWindow({
        //     sizeMode: 'selector', //mode
        //     selector: 'div.example-component:nth-child(5) > div.dropdown-content'
        // });
    });

    it('...documentation/autocomplete should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/autocomplete`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation autocomplete');

        // Get element and type into input
        cy.get('div.example-component:first input').type('j')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(1)'
        });

        // Get element and type into input
        cy.get('div.example-component:nth-child(2)').type('d')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(2)'
        });

        // Click the first switch
        cy.get('div.example-component:nth-child(2) span:first')
            .click();
        // Click the second switch
        cy.get('div.example-component:nth-child(2) span:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(2)'
        });

        // Get element and type into input
        cy.get('div.example-component:nth-child(3) input').type('o')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(3)'
        });

        // Get element and type into input
        cy.get('div.example-component:nth-child(4) input').type('f')
            // wait for results to load
        cy.wait(500);
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(4)'
        });

        // Get element and type into input
        cy.get('div.example-component:nth-child(5) input').type('t')
            // wait for results to load
        cy.wait(500);
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-section:nth-child(5)'
        });
    });

    it('...documentation/checkbox should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/checkbox`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation checkbox');

        // Click third checkbox
        cy.get('.check:first')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:first'
        });
    });

    it('...documentation/clockpicker should load correct elements on page', () => {
        cy.visit(`http://localhost:8080/documentation/clockpicker`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation checkbox');

        // Click time button
        cy.get('span.check:nth-child(1)')
            .click();
        // Enter 12:00 AM
        cy.get('input:nth-child(1)').type('1200AM')
            // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click second time button
        cy.get('span.check:nth-child(2)')
            .click();
        // Enter 12:00 AM
        cy.get('input:nth-child(2)').type('1200PM')
            // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(2)'
        });

        // Click third time button
        cy.get('span.check:nth-child(3)')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(3)'
        });

        // Click through each bullet
        cy.get('.control-label:first').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(2)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(3)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(4)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(5)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(6)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(7)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(8)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
        // Click through each bullet
        cy.get('.control-label:nth-child(9)').click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.column'
        });
    });

    it('...documentation/datepicker should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/datepicker`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation datepicker');

        // Click first input button
        cy.get('input:first')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:first' //CSS Selector
        });

        // Click second input button
        cy.get('input.input:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(2)' //CSS Selector
        });

        // Click third input button
        cy.get('input:nth-child(3)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(3)' //CSS Selector
        });

        // Click fourth input button
        cy.get('input:nth-child(4)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: 'dropdown-content:nth-child(4)' //CSS Selector
        });
    });

    it('...documentation/field should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/field`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation field');

        // Click second radio button
        cy.get('span.check:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.example-component:nth-child(2)' //CSS Selector
        });
    });

    it('...documentation/input should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/input`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation input');
    });

    it('...documentation/numberinput should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/numberinput`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation number input');

        // Click third add button
        cy.get('.mdi-plus:nth-child(3)')
            // Screenshot 
        cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: '.example-component:nth-child(1)' //CSS Selector
        });
    });

    it('...documentation/radio should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/radio`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation radio');
    });

    it('...documentation/select should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/select`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation select');
    });

    it('...documentation/slider should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/slider`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation slider');

        // Tick to 8
        cy.get('.b-slider-tick-label:nth-child(3)').click;
        // Screenshot window 
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component(5)'
        });
    });

    it('...documentation/switch should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/switch`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation switch');
    });

    it('...documentation/taginput should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/taginput`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation taginput');

        // Click first "x" of seventh example
        cy.get('.delete .is-small:nth-child(1)')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(7)'
        });
    });

    it('...documentation/timepicker should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/timepicker`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation timepicker');
    });

    it('...documentation/upload should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/upload`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation upload');
    });

    it('...documentation/icon should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/icon`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation icon');
    });

    it('...documentation/loading should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/loading`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation icon');

        // Click to launch loading
        cy.get('.example-component:first button:first')
            .click();
        // Screenshot loading element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:first'
        });
        // Click to launch full page loading
        cy.get('span.check:nth-child(1)')
            .click();
        // Screenshot full page
        cy.eyesCheckWindow('Screenshot full loading');

        // Click twice to stop loading and stop full page loading
        cy.get('span.check:nth-child(2)')
            .click();
        cy.get('span.check:nth-child(2)')
            .click();
        // Click next loading button
        cy.get('.example-component:nth-child(2) button:first')
            .click();
        // Screenshot loading element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: 'section:nth-child(2)'
        });

        // Click next loading button 
        cy.get('.example-component:nth-child(3) button:first')
            .click();
        // Screenshot loading element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: 'section:nth-child(3)'
        });
        // Click to launch full page loading
        cy.get('span.check:nth-child(3)')
            .click();
        // Screenshot full page
        cy.eyesCheckWindow('Screenshot full loading');
    });

    it('...documentation/menu should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/menu`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation menu');
    });

    it('...documentation/message should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/message`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation message');
    });

    it('...documentation/modal should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/modal`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation modal');

        // Click launch image modal
        cy.get('.example-component:first button:first')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close')
            .click();

        // Click launch card modal (keep scroll)
        cy.get('.example-component:first button:nth-child(2)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close')
            .click();

        // Click launch component modal
        cy.get('.example-component:nth-child(2) button')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('button.modal-card-foot')
            .click();

        // Click launch image modal (HTML)
        cy.get('.example-component:nth-child(3) button:first')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close')
            .click();

        // Click launch card modal (Component)
        cy.get('.example-component:nth-child(3) button:nth-child(2)')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Close popup
        cy.get('.modal-close')
            .click();

        // Click launch component modal
        cy.get('.example-component:nth-child(4) button')
            .click();
        // Click remember me
        cy.get('span.check')
            .click();
        // Screenshot page
        cy.eyesCheckWindow('Screenshot popup');
        // Click close button
        cy.get('button.button')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot window');
    });

    it('...documentation/navbar should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/navbar`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation navbar');
    });

    it('...documentation/notification should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/notification`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation notification');

        // Click toggle button
        cy.get('.example-component:first button:first')
            .click();
        // Screenshot affected element
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:first'
        });

        // Click launch notifications
        cy.get('.example-component:nth-child(5) button:first')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot popup');
        // Click launch notifications custom green
        cy.get('.example-component:nth-child(5) button:nth-child(2)')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot popup');
        // Click launch notifications custom red
        cy.get('.example-component:nth-child(5) button:nth-child(3)')
            .click();
        // Screenshot window
        cy.eyesCheckWindow('Screenshot popup');
    });

    it('...documentation/pagination should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/pagination`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation pagination');
    });

    it('...documentation/progress should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/progress`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation progress');

        // Trigger indeterminate button
        cy.get('.example-component:nth-child(4) .check:first')
            .click();
        // Select option primary
        cy.get('.example-component:nth-child(4) select:first').select('is-primary');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });

        // Select option success
        cy.get('.example-component:nth-child(4) select:first').select('is-success');
        // Select option small
        cy.get('.example-component:nth-child(4) select:nth-child(2)').select('is-small');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });

        // Select option
        cy.get('.example-component:nth-child(4) select:first').select('is-warning');
        // Select option
        cy.get('.example-component:nth-child(4) select:nth-child(2)').select('is-large');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });

        // Select option
        cy.get('.example-component:nth-child(4) select:first').select('is-danger');
        // Screenshot example component
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });
    });

    it('...documentation/snackbar should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/snackbar`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation snackbar');
    });

    it('...documentation/steps should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/steps`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation steps');

        // Click show social
        cy.get('.example-component:first span.check:first')
            .click();
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click clickable marker
        cy.get('.example-component:first span.check:nth-child(3)')
            .click();
        // Click second marker (profile)
        cy.get('.example-component:first .step-marker:nth-child(2)')
            .click();
        // Click success for profile
        cy.get('.example-component:first span.check:nth-child(5)');
        // Toggle arrow buttons
        cy.get('.example-component:first select:nth-child(1)').select('arrow-left');
        cy.get('.example-component:first select:nth-child(2)').select('arrow-right');
        // Screenshot affected components
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Pagination next page
        cy.get('a.pagination-next:nth-child(1)')
            .click();
        cy.get('a.pagination-next:nth-child(2)')
            .click();
        cy.get('a.pagination-next:nth-child(3)')
            .click();
        cy.get('a.pagination-next:nth-child(4)')
            .click();
        cy.get('a.pagination-next:nth-child(5)')
        click();
        cy.eyesCheckWindow('Take snapshot of window');
    });

    it('...documentation/table should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/table`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation table');

        // Trigger bordered
        cy.get('.example-component:nth-child(2) span.check:nth-child(1)')
            .click();
        // Trigger striped
        cy.get('.example-component:nth-child(2) span.check:nth-child(2)')
            .click();
        // Trigger narrow
        cy.get('.example-component:nth-child(2) span.check:nth-child(3)')
            .click();
        // Trigger loading state
        cy.get('.example-component:nth-child(2) span.check:nth-child(6)')
            .click();
        // Take a snapshot of affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(2)'
        });

        // Trigger empty table
        cy.get('.example-component:nth-child(2) span.check:nth-child(7)')
            .click();
        // Take a snapshot of affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(2)'
        });

        // Click simple pagination
        cy.get('.example-component:nth-child(5) span.check:nth-child(2)')
            .click();
        // Sort by descending
        cy.get('.example-component:nth-child(5) select:first').select('desc');
        // Sort by 15 per page
        cy.get('.example-component:nth-child(5) select:nth-child(2)').select('15');
        // Show double pagination
        cy.get('.example-component:nth-child(5) select:nth-child(3)').select('both');
        // Show chevron order
        cy.get('.example-component:nth-child(5) select:nth-child(4)').select('chevron-up');
        // Screenshot changes
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(5)'
        });
    });

    it('...documentation/tabs should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/tabs`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation tabs');

        // Show books item
        cy.get('.example-component:first span.check')
            .click();
        // Click on books tab
        cy.get('.example-component:first li:nth-child(3)')
            .click();
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });
    });

    it('...documentation/tag should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/tag`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation tag');
    });

    it('...documentation/toast should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/toast`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation toast');

        // Click success button
        cy.get('.example-component:first .is-success')
            .click();
        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Screenshot page');
    });

    it('...documentation/tooltip should load correct elements and functionalities on page', () => {
        cy.visit(`http://localhost:8080/documentation/tooltip`);

        // Let browser load
        cy.wait(1000);
        // Screenshot window
        cy.eyesCheckWindow('Documentation tooltip');

        // Click first dark button
        cy.get('.example-component:first .is-dark:first')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(1)'
        });

        // Click animated button
        cy.get('.example-component:nth-child(2) button:nth-child(2)')
            // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(2)'
        });

        // Click second dark multilined button
        cy.get('.example-component:nth-child(3) button:nth-child(2)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(3)'
        });

        // Click right dark button
        cy.get('.example-component:nth-child(4) button:nth-child(3)')
            .click();
        // Screenshot affected elements
        cy.eyesCheckWindow({
            sizeMode: 'selector',
            selector: '.example-component:nth-child(4)'
        });
    });

});